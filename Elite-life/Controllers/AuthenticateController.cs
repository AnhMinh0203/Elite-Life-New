using Elite_life_datacontext.Constants;
using Elite_life_datacontext.Model;
using Elite_life_datacontext.Utils;
using Elite_life_repository.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;

namespace Elite_life.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AuthenticateController : ControllerBase
    {
        private readonly IAuthenticateRepos _authenticateRepos;
        private readonly TokenUtils _tokenUtils;
        private readonly IConfiguration _configuration;

        public AuthenticateController(
            IAuthenticateRepos authenticateRepos,
            TokenUtils tokenUtils,
            IConfiguration configuration)
        {
            _authenticateRepos = authenticateRepos;
            _tokenUtils = tokenUtils;
            _configuration = configuration;
        }

        [HttpPost]
        [Route("login")]
        public async Task<MethodResult> Login([FromBody] LoginModel model)
        {
                var user = await _authenticateRepos.FindByUserNameAsync(model.Username);
            if (user != null && _authenticateRepos.CheckPasswordAsync(model.Password, user.Password))
            {
                var authClaims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, user.UserName),
                    new Claim(ClaimTypes.Email, user.Email),
                    new Claim ("PhoneNumber", user.Mobile),
                    new Claim ("DisplayName", user.Name),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                };

                authClaims.Add(new Claim(ClaimTypes.Role, user.Rank));

                var token = _tokenUtils.CreateToken(authClaims);
                var refreshToken = _tokenUtils.GenerateRefreshToken();

                _ = int.TryParse(_configuration["JWT:RefreshTokenValidityInHours"], out int refreshTokenValidityInHours);

                user.RefreshToken = refreshToken;
                user.RefreshTokenExpiryTime = DateTime.Now.AddHours(refreshTokenValidityInHours);

                await _authenticateRepos.UpdateRefreshTokenAsync(user.Id, user.RefreshToken, user.RefreshTokenExpiryTime);
                LoginRespon loginRespon = new LoginRespon();
                loginRespon.collaboratorDto = user;
                loginRespon.Token = new JwtSecurityTokenHandler().WriteToken(token);
                loginRespon.RefreshToken = refreshToken;
                loginRespon.RefreshTokenExpiryTime = user.RefreshTokenExpiryTime;
                return MethodResult.ResultWithSuccess(loginRespon,200,"Success");
            }
            return MethodResult.ResultWithAuthorized("Mã đăng nhập hoặc mật khẩu không đúng", 401, "Error");
        }

        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> Register([FromBody] RegisterModel model)
        {
            var userExists = await _authenticateRepos.FindByUserNameAsync(model.Username);
            if (userExists != null)
            {
                return StatusCode(StatusCodes.Status400BadRequest, new Response
                {
                    Status = "Error",
                    Message = "Tên đăng nhập đã tồn tại!"
                });
            }
            var isCreated = await _authenticateRepos.CreateUserAsync(model);
            if (isCreated < 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response
                {
                    Status = "Error",
                    Message = "Không thể tạo người dùng! Vui lòng kiểm tra thông tin và thử lại."
                });
            }
            return Ok(new Response
            {
                Status = "Success",
                Message = "Người dùng đã được tạo thành công!"
            });
        }

        [HttpPost]
        [Route("register-admin")]
        public async Task<IActionResult> RegisterAdmin([FromBody] RegisterModel model)
        {
            var userExists = await _authenticateRepos.FindByUserNameAsync(model.Username);
            if (userExists != null)
            {
                return StatusCode(StatusCodes.Status400BadRequest, new Response
                {
                    Status = "Error",
                    Message = "Tên đăng nhập đã tồn tại!"
                });
            }
            var isCreated = await _authenticateRepos.RegisterAdminAsync(model);
            if (isCreated < 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response
                {
                    Status = "Error",
                    Message = "Không thể tạo người dùng! Vui lòng kiểm tra thông tin và thử lại."
                });
            }
            return Ok(new Response
            {
                Status = "Success",
                Message = "Người dùng đã được tạo thành công!"
            });
        }

        [HttpPost]
        [Route("refresh-token")]
        public async Task<IActionResult> RefreshToken(TokenModel tokenModel)
        {
            if (tokenModel is null)
            {
                return BadRequest("Invalid client request");
            }

            string? accessToken = tokenModel.AccessToken;
            string? refreshToken = tokenModel.RefreshToken;

            var principal = _tokenUtils.GetPrincipalFromExpiredToken(accessToken);
            if (principal == null)
            {
                return BadRequest("Invalid access token or refresh token");
            }
            string username = principal.Identity.Name;

            var user = await _authenticateRepos.FindByUserNameAsync(username);

            if (user == null || user.RefreshToken != refreshToken || user.RefreshTokenExpiryTime <= DateTime.Now)
            {
                return BadRequest("Invalid access token or refresh token");
            }

            var newAccessToken = _tokenUtils.CreateToken(principal.Claims.ToList());
            var newRefreshToken = _tokenUtils.GenerateRefreshToken();

            user.RefreshToken = newRefreshToken;
            await _authenticateRepos.UpdateRefreshTokenAsync(user.Id, user.RefreshToken, user.RefreshTokenExpiryTime);
            return new ObjectResult(new
            {
                accessToken = new JwtSecurityTokenHandler().WriteToken(newAccessToken),
                refreshToken = newRefreshToken
            });
        }

        [Authorize]
        [HttpPost]
        [Route("revoke/{username}")]
        public async Task<IActionResult> Revoke(string username)
        {
            var user = await _authenticateRepos.FindByUserNameAsync(username);
            if (user == null) return BadRequest("Invalid user name");

            user.RefreshToken = null;
            await _authenticateRepos.UpdateRefreshTokenAsync(user.Id, user.RefreshToken, user.RefreshTokenExpiryTime);

            return NoContent();
        }

        [Authorize]
        [HttpPost]
        [Route("revoke-all")]
        public async Task<IActionResult> RevokeAll()
        {
            var users = await _authenticateRepos.GetAllUsersAsync();
            foreach (var user in users)
            {
                user.RefreshToken = null;
                await _authenticateRepos.UpdateRefreshTokenAsync(user.Id, user.RefreshToken, user.RefreshTokenExpiryTime);
            }

            return NoContent();
        }


    }
}

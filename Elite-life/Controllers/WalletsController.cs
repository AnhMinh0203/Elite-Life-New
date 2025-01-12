using Elite_life_datacontext.Model;
using Elite_life_datacontext.Utils;
using Elite_life_repository.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace Elite_life.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class WalletsController : ControllerBase
    {
        private readonly IWalletsRepos _walletsRepos;
        public WalletsController(IWalletsRepos walletsRepos)
        {
            _walletsRepos = walletsRepos;
        }

        [HttpGet]
        [Route("wallet-by-collaborratorId")]
        public async Task<MethodResult> GetStatisticalDailyWallet(int CollaboratorId)
        {
            var result = await _walletsRepos.GetWalletsByCollaboratorId(CollaboratorId);
            if (result != null)
            {
                return MethodResult.ResultWithSuccess(result, 200, "Success");

            }
            return MethodResult.ResultWithError(null, 400, "Not Found");
        }

        [HttpPost]
        [Route("recharge")]
        public async Task<MethodResult> Recharge(WalletRechargeModel model)
        {
            var userClaims = HttpContext.User.Claims;
            var rolesClaim = userClaims.FirstOrDefault(c => c.Type == ClaimTypes.Role)?.Value;

            var roles = rolesClaim?.Split(',').ToList() ?? new List<string>();
            if (!roles.Contains("member-manager-recharge-member"))
            {
                return MethodResult.ResultWithError("Danh sách thành viên - Nạp tiền", 403, "Bạn không có quyền");
            }
            var result = await _walletsRepos.Recharge(model);
            if (result)
            {
                return MethodResult.ResultWithSuccess(result, 200, "Success");

            }
            return MethodResult.ResultWithError(null, 400, "Not Found");
        }
    }
}

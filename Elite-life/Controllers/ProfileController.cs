using Elite_life_datacontext.Model;
using Elite_life_datacontext.Utils;
using Elite_life_repository.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Text.RegularExpressions;

namespace Elite_life.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class ProfileController : ControllerBase
    {
        private readonly IProfileRepos _profileRepos;
        private readonly IConfiguration _configuration;
        public ProfileController(IProfileRepos profileRepos, IConfiguration configuration)
        {
            _profileRepos = profileRepos;
            _configuration = configuration;
        }

        [HttpGet]
        [Route("getProfile")]
        public async Task<MethodResult> GetProfile(string UserName)
        {
            var result = await _profileRepos.GetProfileAsync(UserName);
            if (result != null)
            {
                return MethodResult.ResultWithSuccess(result, 200, "Success");

            }
            return MethodResult.ResultWithError(null, 400, "Not Found");
        }

        [HttpGet]
        [Route("profile-getBanks")]
        public async Task<MethodResult> GetBank()
        {
            var result = await _profileRepos.GetBanksAsync();
            if (result == null || !result.Any())
            {
                return MethodResult.ResultWithError(null, 400, "Not Found");
            }
            return MethodResult.ResultWithSuccess(result, 200, "Success");
        }

        [HttpPost]
        [Route("profile-updateContactInfo")]
        public async Task<MethodResult> UpdateContactInfo(ProfileContactInfo profileContactInfo)
        {
            var result = await _profileRepos.UpdateProfileContactInfoAsync(profileContactInfo);
            if(result == null || !result.Any())
            {
                return MethodResult.ResultWithError(null, 400, "Not found");
            }
            return MethodResult.ResultWithSuccess(result, 200, "Success");
        }

        [HttpPost]
        [Route("profile-checkCurrentPassword")]
        public async Task<MethodResult> CheckCurrentPassword(ProfilePasswordModel checkPasswordModel)
        {
            var(isMatch, errorMessage) = await _profileRepos.CheckCurrentPassAsync(checkPasswordModel);
            if (!string.IsNullOrEmpty(errorMessage))
            {
                return MethodResult.ResultWithError(isMatch, 500, errorMessage);
            }

            if (!isMatch)
            {
                return MethodResult.ResultWithError(isMatch, 400, "Failed");
            }

            return MethodResult.ResultWithSuccess(isMatch, 200, "Success");
        }

        [HttpPost]
        [Route("profile-changePassword")]
        public async Task<MethodResult> ChangePassword(ProfilePasswordModel checkPasswordModel)
        {
            var result = await _profileRepos.ChangePassAsync(checkPasswordModel);
            if (result == null || !result.Any())
            {
                return MethodResult.ResultWithError(null, 400, "Not found");
            }
            return MethodResult.ResultWithSuccess(result, 200, "Success");
        }

        [HttpPost]
        [Route("profile-update")]
        public async Task<MethodResult> UpdateProfile(ProfileUpdateModel profileUpdateModel)
        {
            var result = await _profileRepos.UpdateProfileAsync(profileUpdateModel);
            if (result == null || !result.Any())
            {
                return MethodResult.ResultWithError(null, 400, "Not found");
            }
            return MethodResult.ResultWithSuccess(result, 200, "Success");
        }
    }
}

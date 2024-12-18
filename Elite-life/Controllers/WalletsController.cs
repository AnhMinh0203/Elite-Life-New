using Elite_life_datacontext.Model;
using Elite_life_datacontext.Utils;
using Elite_life_repository.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Elite_life.Controllers
{
    //[Authorize]
    [ApiController]
    [Route("[controller]")]
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
    }
}

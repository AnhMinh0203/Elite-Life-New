using Elite_life_datacontext.Model;
using Elite_life_datacontext.Utils;
using Elite_life_repository.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace Elite_life.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class StatisticalController : ControllerBase
    {
        private readonly IStatisticalRepos _statisticalRepos;
        public StatisticalController(IStatisticalRepos statisticalRepos)
        {
            _statisticalRepos = statisticalRepos;
        }

        [HttpGet]
        [Authorize]
        [Route("daily-wallet")]
        public async Task<MethodResult> GetStatisticalDailyWallet([FromQuery] StatisticalModel model)
        {
            var result = await _statisticalRepos.GetStatisticalDailyWalletAsync(model);
            if(result != null) {
                return MethodResult.ResultWithSuccess(result, 200, "Success");

            }
            return MethodResult.ResultWithError(null, 400, "Not Found");
        }
    }
}

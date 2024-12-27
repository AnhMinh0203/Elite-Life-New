using Elite_life_datacontext.Utils;
using Elite_life_repository.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Elite_life.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WalletDetailController : ControllerBase
    {
        private readonly IWalletDetailRepos _walletDetailRepos;
        private readonly IConfiguration _configuration;
        public WalletDetailController(IWalletDetailRepos walletDetailRepos, IConfiguration configuration)
        {
            _walletDetailRepos = walletDetailRepos;
            _configuration = configuration;
        }

        [HttpGet]
        [Route("get-value-commission")]
        public async Task<MethodResult> GetCommissionByCollaboratorId(int? CollaboratorId, int? type)
        {
            var result = await _walletDetailRepos.GetCommissionByCollaboratorId(CollaboratorId, type);
            if (result != null)
            {
                return MethodResult.ResultWithSuccess(result, 200, "Success");

            }
            return MethodResult.ResultWithError(null, 400, "Not Found");
        }

        [HttpGet]
        [Route("get-value-admin")]
        public async Task<MethodResult> GetWalletDetailAdminAsync(string date, int type)
        {
            var result = await _walletDetailRepos.GetWalletDetailAdminAsync(date, type);
            if (result != null)
            {
                return MethodResult.ResultWithSuccess(result, 200, "Success");

            }
            return MethodResult.ResultWithError(null, 400, "Not Found");
        }

        [HttpGet]
        [Route("get-value-report-admin")]
        public async Task<MethodResult> GetWalletDetailAdminReportAsync(string date, int type)
        {
            var result = await _walletDetailRepos.GetWalletDetailAdminReportAsync(date, type);
            if (result != null)
            {
                return MethodResult.ResultWithSuccess(result, 200, "Success");

            }
            return MethodResult.ResultWithError(null, 400, "Not Found");
        }
    }
}

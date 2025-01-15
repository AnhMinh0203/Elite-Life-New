using Elite_life_datacontext.Dto;
using Elite_life_datacontext.Dto;
using Elite_life_datacontext.Model;
using Elite_life_datacontext.Utils;
using Elite_life_repository;
using Elite_life_repository.Common;
using Elite_life_repository.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Reflection;

namespace Elite_life.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class WithdrawalController : ControllerBase
    {
        private readonly IWithdrawalRepos _withdrawalRepos;
        private readonly IConfiguration _configuration;
        public WithdrawalController(IWithdrawalRepos withdrawalRepos, IConfiguration configuration)
        {
            _withdrawalRepos = withdrawalRepos;
            _configuration = configuration;
        }



        [HttpPost]
        [Route("Wallet-withDraw")]
        public async Task<MethodResult> GetProfile(string UserName)
        {
            var result = await _withdrawalRepos.WithdrawMoneyAsync(UserName);
            if (result != null)
            {
                return MethodResult.ResultWithSuccess(result, 200, "Success");

            }
            return MethodResult.ResultWithError(null, 400, "Not Found");
        }

        [HttpGet]
        [Route("Wallet-getBanks")]
        public async Task<MethodResult> GetBank()
        {
            var result = await _withdrawalRepos.GetBanksAsync();
            if (result == null || !result.Any())
            {
                return MethodResult.ResultWithError(null, 400, "Not Found");
            }
            return MethodResult.ResultWithSuccess(result, 200, "Success");
        }

        [HttpPost]
        [Route("Wallet-getCollaboratorId")]
        public async Task<MethodResult> GetCollaboratorId(string userName)
        {
            var result = await _withdrawalRepos.GetCollaboratorIdAsync(userName);
            if (result == null)
            {
                return MethodResult.ResultWithError(null, 400, "Not Found");
            }
            return MethodResult.ResultWithSuccess(result, 200, "Success");
        }


        [HttpPost]
        [Route("Wallet-requestWithdraw")]
        public async Task<MethodResult> RequestWithdrawMoney(RequestWithdrawMoneyModel requestWithdrawMoneyModel)
        {
            var result = await _withdrawalRepos.RequestWithdrawMoneyAsync(requestWithdrawMoneyModel);
            if (result == null || !result.Any())
            {
                return MethodResult.ResultWithError(null, 400, "Not Found");
            }
            return MethodResult.ResultWithSuccess(result, 200, "Success");
        }

        [HttpPost]
        [Route("Wallet-getWalletHistory")]
        public async Task<MethodResult> GetWalletHistory(WithdrawMoneyRange withdrawMoneyRange)
        {
            var result = await _withdrawalRepos.GetWalletHistoryAsync(withdrawMoneyRange);
            if (result == null || !result.Any())
            {
                return MethodResult.ResultWithError(null, 400, "Not Found");
            }
            return MethodResult.ResultWithSuccess(result, 200, "Success");
        }

        [HttpPost]
        [Route("Wallet-getWalletByType")]
        public async Task<MethodResult> GetWalletByType(WalletType walletType)
        {
            var result = await _withdrawalRepos.GetWalletByTypeAsync(walletType);
            if (result == null)
            {
                return MethodResult.ResultWithError(null, 400, "Not Found");
            }
            return MethodResult.ResultWithSuccess(result, 200, "Success");
        }

        [HttpGet]
        [Route("Wallet-getWalletClients")]
        public async Task<MethodResult> GetWalletClients()
        {
            var result = await _withdrawalRepos.GetWalletClientsAsync();
            if (result == null)
            {
                return MethodResult.ResultWithError(null, 400, "Not Found");
            }
            return MethodResult.ResultWithSuccess(result, 200, "Success");
        }

        [HttpPost]
        [Route("Wallet-withdrawCommissionRequest")]
        public async Task<MethodResult> WithdrawCommissionRequest(WithdrawCommissionRequire request)
        {
            var result = await _withdrawalRepos.WithdrawCommissionWalletAsync(request);
            if (string.IsNullOrEmpty(result) || result.Contains("Lỗi"))
            {
                return MethodResult.ResultWithError(null, 400, result);
            }
            return MethodResult.ResultWithSuccess(result, 200, "Success");
        }

        [HttpPost]
        [Route("Wallet-createWithdrawHistory")]
        public async Task<MethodResult> CreateWithdrawHistory(CreateWalletHistory createWalletHistory)
        {
            var result = await _withdrawalRepos.CreateWalletHistoryAsync(createWalletHistory);
            if (result == null || !result.Any())
            {
                return MethodResult.ResultWithError(null, 400, "Not Found");
            }
            return MethodResult.ResultWithSuccess(result, 200, "Success");
        }

        [HttpPost]
        [Route("Wallet-exportExcelWalletHistory")]
        public async Task<IActionResult> ExportExcelCollaboratorsByParendId(WithdrawMoneyRange withdrawMoneyRange)
        {

            var toDay = DateTime.Today;

            var result = await _withdrawalRepos.ExportExcelCollaboratorsByParendId(withdrawMoneyRange);
            string templateFileURL = Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), "wwwroot", "template", "Export_Wallet_History.xlsx"); ;
            string fileName = $"{ExtensionFile.GetFileNameWithoutExtension(templateFileURL)}_{toDay.ToString().Replace('/', '_').Replace(':', '_').Replace(' ', '_')}.xlsx";

            Response.Headers.Add("fileName", fileName);
            return File(result.ToArray(), ExtensionFile.GetContentType(templateFileURL), fileName);
        }

        [HttpPost]
        [Route("Wallet-transferMoney")]
        public async Task<MethodResult> TransferMoney(TransferRequestModel transferRequestModel)
        {
            var result = await _withdrawalRepos.TransferMoneyAsync(transferRequestModel);
            if (string.IsNullOrEmpty(result) || result.Contains("Lỗi"))
            {
                return MethodResult.ResultWithError(null, 400, result);
            }
            return MethodResult.ResultWithSuccess(result, 200, "Success");
        }

        [HttpPost]
        [Route("Wallet-getProcessingWithdrawalRequests")]
        public async Task<MethodResult> GetProcessingWithdrawalRequests(CollaboratorMemberManagerModel model)
        {
            var result = await _withdrawalRepos.GetProcessingWithdrawalRequestsAsync(model);
            if (result == null || !result.Any())
            {
                return MethodResult.ResultWithError(null, 400, "Not Found");
            }
            return MethodResult.ResultWithSuccess(result, 200, "Success");
        }

        [HttpPost]
        [Route("Wallet-approveWithdrawal")]
        public async Task<MethodResult> ApproveWithdrawal(WithdrawalRequestModel model)
        {
            var result = await _withdrawalRepos.ApproveWithdrawal(model.WithdrawalRequestId, model.Note);
            if (result)
            {
                return MethodResult.ResultWithSuccess(result, 200, "Success");
            }
            return MethodResult.ResultWithError(null, 400, "Not Found");
        }

        [HttpPost]
        [Route("Wallet-rejectWithdrawal")]
        public async Task<MethodResult> RejectWithdrawal(WithdrawalRequestModel model)
        {
            var result = await _withdrawalRepos.RejectWithdrawal(model.WithdrawalRequestId, model.Note);
            if (result)
            {
                return MethodResult.ResultWithSuccess(result, 200, "Success");
            }
            return MethodResult.ResultWithError(null, 400, "Not Found");
        }

        [HttpPost]
        [Route("Wallet-exportExcelProcessingWithdrawalRequests")]
        public async Task<IActionResult> ExportExcelProcessingWithdrawalRequests(CollaboratorMemberManagerModel model)
        {
            var toDay = DateTime.Today;

            var result = await _withdrawalRepos.ExportExcelProcessingWithdrawalRequestsAsync(model);
            string templateFileURL = Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), "wwwroot", "template", "Export_Processing_Withdrawal_Requests.xlsx");
            string fileName = $"{ExtensionFile.GetFileNameWithoutExtension(templateFileURL)}_{toDay.ToString().Replace('/', '_').Replace(':', '_').Replace(' ', '_')}.xlsx";

            Response.Headers.Add("fileName", fileName);
            return File(result.ToArray(), ExtensionFile.GetContentType(templateFileURL), fileName);
        }

        [HttpPost]
        [Route("get-all-collaborator")]
        public async Task<MethodResult> GetAllCollaborators(CollaboratorMemberManagerModel model)
        {
            var result = await _withdrawalRepos.GetAllCollaborators(model);
            if (result != null)
            {
                return MethodResult.ResultWithSuccess(result, 200, "Success");

            }
            return MethodResult.ResultWithError(null, 400, "Not Found");
        }

    }
}

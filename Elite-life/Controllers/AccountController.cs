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
    public class AccountController : ControllerBase
    {
        private readonly IAccountManagerRepons _accountManagerRepons;
        private readonly IConfiguration _configuration;
        public AccountController(IAccountManagerRepons accountManagerRepons, IConfiguration configuration)
        {
            _accountManagerRepons = accountManagerRepons;
            _configuration = configuration;
        }

        [HttpGet]
        [Route("Account-GetAll")]
        public async Task<MethodResult> GetAllMembers()
        {
            var result = await _accountManagerRepons.GetAllAccountsAsync();
            if (result != null || result.Any())
            {
                return MethodResult.ResultWithSuccess(result, 200, "Success");
            }
            return MethodResult.ResultWithError(null, 400, "Not Found");
        }

        [HttpDelete]
        [Route("Account-DeleteAccount")]
        public async Task<MethodResult> DeleteAccount(string userName)
        {
            var result = await _accountManagerRepons.DeleteAccountAsync(userName);
            if (string.IsNullOrEmpty(result) || result.Contains("Lỗi"))
            {
                return MethodResult.ResultWithError(null, 400, result);
            }
            return MethodResult.ResultWithSuccess(result, 200, "Success");
        }

        [HttpPost]
        [Route("Account-GetAccountByRange")]
        public async Task<MethodResult> GetWalletHistory(AccountRangeModel accountRangeModel)
        {
            var result = await _accountManagerRepons.GetAccountsByRange(accountRangeModel);
            if (result == null || !result.Any())
            {
                return MethodResult.ResultWithError(null, 400, "Not Found");
            }
            return MethodResult.ResultWithSuccess(result, 200, "Success");
        }

        [HttpPost]
        [Route("Account-exportExcelAccount")]
        public async Task<IActionResult> ExportExcelCollaboratorsByParendId(AccountRangeModel accountRangeMode)
        {

            var toDay = DateTime.Today;

            var result = await _accountManagerRepons.ExportExcelAccounts(accountRangeMode);
            string templateFileURL = Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), "wwwroot", "template", "Export_Account_User.xlsx"); ;
            string fileName = $"{ExtensionFile.GetFileNameWithoutExtension(templateFileURL)}_{toDay.ToString().Replace('/', '_').Replace(':', '_').Replace(' ', '_')}.xlsx";

            Response.Headers.Add("fileName", fileName);
            return File(result.ToArray(), ExtensionFile.GetContentType(templateFileURL), fileName);
        }


        [HttpPost]
        [Route("Account-CreateAccount")]
        public async Task<MethodResult> CreateAccount(AccountCreateModel accountCreateModel)
        {
            var result = await _accountManagerRepons.CreateAccountAdminAsync(accountCreateModel);
            if (string.IsNullOrEmpty(result) || result.Contains("Lỗi"))
            {
                return MethodResult.ResultWithError(null, 400, result);
            }
            return MethodResult.ResultWithSuccess(result, 200, "Success");
        }
    }
}
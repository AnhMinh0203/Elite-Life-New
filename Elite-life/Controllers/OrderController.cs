using Elite_life_datacontext.Dto;
using Elite_life_datacontext.Model;
using Elite_life_datacontext.Utils;
using Elite_life_repository.Common;
using Elite_life_repository.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Reflection;

namespace Elite_life.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class OrderController : ControllerBase
    {
        private readonly IOrderRepos _orderRepos;
        private readonly IConfiguration _configuration;
        public OrderController(IOrderRepos orderRepos, IConfiguration configuration)
        {
            _orderRepos = orderRepos;
            _configuration = configuration;
        }

        [HttpPost]
        [Route("get-order-infor")]
        public async Task<MethodResult> GetOrderInfor(CollaboratorMemberManagerModel model)
        {
            var result = await _orderRepos.GetOrderInfoAsync(model);
            if (result != null)
            {
                return MethodResult.ResultWithSuccess(result, 200, "Success");

            }
            return MethodResult.ResultWithError(null, 400, "Not Found");
        }

        [HttpPost]
        [Route("update_order_delivery_date")]
        public async Task<MethodResult> UpdateOrderDeliveryDate(OrderDeliveryDateModel model)
        {
            var result = await _orderRepos.UpdateOrderDeliveryDate(model);
            if (result)
            {
                return MethodResult.ResultWithSuccess(result, 200, "Success");

            }
            return MethodResult.ResultWithError(null, 400, "Not Found");
        }

        [HttpGet]
        [Route("get-bill-order")]
        public async Task<MethodResult> GetBillOrderInfoAsync(int OrderId)
        {
            var result = await _orderRepos.GetBillOrderInfoAsync(OrderId);
            if (result != null)
            {
                return MethodResult.ResultWithSuccess(result, 200, "Success");

            }
            return MethodResult.ResultWithError(null, 400, "Not Found");
        }

        [HttpPost]
        [Route("place-order")]
        public async Task<MethodResult> PlaceOrder(PlaceOrderModel model)
        {
            OrderResultModel result = await _orderRepos.PlaceOrderAsync(model);
            if (string.IsNullOrEmpty(result.Message) || result.Message.Contains("Lỗi"))
            {
                return MethodResult.ResultWithError(result, 400, "Not Found");
            }

            return MethodResult.ResultWithSuccess(result, 200, "Success");
        }

        [HttpPost]
        [Route("get-WalletHistory")]
        public async Task<MethodResult> GetWalletHistory(WithdrawMoneyRange withdrawMoneyRange)
        {
            var result = await _orderRepos.GetWalletHistoryAsync(withdrawMoneyRange);
            if (result == null || !result.Any())
            {
                return MethodResult.ResultWithError(null, 400, "Not Found");
            }
            return MethodResult.ResultWithSuccess(result, 200, "Success");
        }


        [HttpPost]
        [Route("create-WithdrawHistory")]
        public async Task<MethodResult> CreateWithdrawHistory(CreateWalletHistory createWalletHistory)
        {
            var result = await _orderRepos.CreateWalletHistoryAsync(createWalletHistory);
            if (result == null || !result.Any())
            {
                return MethodResult.ResultWithError(null, 400, "Not Found");
            }
            return MethodResult.ResultWithSuccess(result, 200, "Success");
        }

        [HttpPost]
        [Route("caculate-shareCommission")]
        public async Task<MethodResult> CaculateShareCommission(CommissionModel shareCommissionModel)
        {
            var result = await _orderRepos.CaculateShareCommissionAsync(shareCommissionModel);
            if (string.IsNullOrEmpty(result) || result.Contains("Lỗi"))
            {
                return MethodResult.ResultWithError(result, 400, "Not Found");
            }
            return MethodResult.ResultWithSuccess(result, 200, "Success");
        }

        [HttpPost]
        [Route("caculate-gratitudeCommission")]
        public async Task<MethodResult> CaculateGratitudeCommission(GratitudeCommissionModel gratitudeCommissionModel)
        {
            var result = await _orderRepos.CaculateGratitudeCommissionAsync(gratitudeCommissionModel);
            if (string.IsNullOrEmpty(result) || result.Contains("Lỗi"))
            {
                return MethodResult.ResultWithError(result, 400, "Not Found");
            }
            return MethodResult.ResultWithSuccess(result, 200, "Success");
        }

        [HttpPost]
        [Route("caculate-introCommission")]
        public async Task<MethodResult> CaculateIntroCommission(CommissionModel introCommissionModel)
        {
            var result = await _orderRepos.CaculateIntroCommissionAsync(introCommissionModel);
            if (string.IsNullOrEmpty(result) || result.Contains("Lỗi"))
            {
                return MethodResult.ResultWithError(result, 400, "Not Found");
            }
            return MethodResult.ResultWithSuccess(result, 200, "Success");
        }

        [HttpPost]
        [Route("caculate-leaderCommission")]
        public async Task<MethodResult> CaculateLeaderCommission(CommissionModel introCommissionModel)
        {
            var result = await _orderRepos.CaculateLeaderCommissionAsync(introCommissionModel);
            if (string.IsNullOrEmpty(result) || result.Contains("Lỗi"))
            {
                return MethodResult.ResultWithError(result, 400, "Not Found");
            }
            return MethodResult.ResultWithSuccess(result, 200, "Success");
        }

        [HttpGet]
        [Route("get-orderHistory")]
        public async Task<MethodResult> GetOrderHistory(int collaboratorId)
        {
            var result = await _orderRepos.GetOrderHistoryAsync(collaboratorId);
            if (result == null && !result.Any())
            {
                return MethodResult.ResultWithError(result, 400, "Not Found");
            }
            return MethodResult.ResultWithSuccess(result, 200, "Success");
        }

        [HttpGet]
        [Route("get-warehouse")]
        public async Task<MethodResult> GetWarehouse()
        {
            var result = await _orderRepos.GetWarehouseAsync();
            if (result == null && !result.Any())
            {
                return MethodResult.ResultWithError(result, 400, "Not Found");
            }
            return MethodResult.ResultWithSuccess(result, 200, "Success");
        }

        [HttpGet]
        [Route("check-rank")]
        public async Task<MethodResult> CheckRank(int collaboratorId)
        {
            var result = await _orderRepos.CheckRankAsync(collaboratorId);
            if (string.IsNullOrEmpty(result) || result.Contains("Lỗi"))
            {
                return MethodResult.ResultWithError(result, 400, "Not Found");
            }

            return MethodResult.ResultWithSuccess(result, 200, "Success");
        }

        [HttpPost]
        [Route("get-order-by-rangeDate")]
        public async Task<MethodResult> GetOrderByRangeDate(OrderRange orderRange)
        {
            var result = await _orderRepos.GetOrdersByDateRangeAsync(orderRange);
            if (result == null || !result.Any())
            {
                return MethodResult.ResultWithError(result, 400, "Not Found");
            }
            return MethodResult.ResultWithSuccess(result, 200, "Success");
        }

        [HttpPost]
        [Route("export-excel-order-date-range")]
        public async Task<IActionResult> ExportExcelCollaboratorsByParendId(OrderRange orderRange)
        {

            var toDay = DateTime.Today;

            var result = await _orderRepos.ExportExcelOrderByDateRange(orderRange);
            string templateFileURL = Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), "wwwroot", "template", "Export_Order_History.xlsx"); ;
            string fileName = $"{ExtensionFile.GetFileNameWithoutExtension(templateFileURL)}_{toDay.ToString().Replace('/', '_').Replace(':', '_').Replace(' ', '_')}.xlsx";

            Response.Headers.Add("fileName", fileName);
            return File(result.ToArray(), ExtensionFile.GetContentType(templateFileURL), fileName);
        }

        [HttpGet]
        [Route("get-purchase-statistics")]
        public async Task<MethodResult> GetPurchaseStatisticsAsync(int month, int year)
        {
            var result = await _orderRepos.GetPurchaseStatisticsAsync(month, year);
            if (result != (0, 0))
            {
                return MethodResult.ResultWithSuccess(
                    new { NotPurchased = result.NotPurchased, Purchased = result.Purchased }
                , 200
                , "Success");

            }
            return MethodResult.ResultWithError(null, 400, "Not Found");
        }
    }
}

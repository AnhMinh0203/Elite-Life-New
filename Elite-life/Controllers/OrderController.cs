using Elite_life_datacontext.Dto;
using Elite_life_datacontext.Model;
using Elite_life_datacontext.Utils;
using Elite_life_repository.Interfaces;
using Microsoft.AspNetCore.Mvc;

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
    }
}

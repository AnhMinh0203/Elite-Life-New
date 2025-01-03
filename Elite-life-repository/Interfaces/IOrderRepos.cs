using Elite_life_datacontext.Dto;
using Elite_life_datacontext.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Elite_life_repository.Interfaces
{
    public interface IOrderRepos
    {
        Task<List<OrderInfoDto>> GetOrderInfoAsync(CollaboratorMemberManagerModel model);
        Task<List<OrderBillDto>> GetBillOrderInfoAsync(int OrderId);
        Task<bool> UpdateOrderDeliveryDate(OrderDeliveryDateModel model);
        Task<(int NotPurchased, int Purchased)> GetPurchaseStatisticsAsync(int month, int year);
    }
}

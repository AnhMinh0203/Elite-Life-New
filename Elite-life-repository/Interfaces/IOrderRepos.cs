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
        Task<List<WalletHistoryModel>> GetWalletHistoryAsync(WithdrawMoneyRange withdrawMoneyRange);
        Task<string> CreateWalletHistoryAsync(CreateWalletHistory createWalletHistory);
        Task<OrderResultModel> PlaceOrderAsync(PlaceOrderModel placeOrderModel);
        Task<string> CaculateShareCommissionAsync(CommissionModel shareCommissionModel);
        Task<string> CaculateGratitudeCommissionAsync(GratitudeCommissionModel gratitudeCommissionModel);
        Task<string> CaculateIntroCommissionAsync(CommissionModel introCommissionModel);
        Task<string> CaculateLeaderCommissionAsync(CommissionModel introCommissionModel);
        Task<(int NotPurchased, int Purchased)> GetPurchaseStatisticsAsync(int month, int year);
    }
}

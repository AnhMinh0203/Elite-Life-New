using Elite_life_datacontext.Dto;
using Elite_life_datacontext.Dto;
using Elite_life_datacontext.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Elite_life_repository.Interfaces
{
    public interface IWithdrawalRepos
    {
        Task<WithdrawMoneyModel?> WithdrawMoneyAsync(string userName);
        Task<List<string>> GetBanksAsync();
        Task<string> RequestWithdrawMoneyAsync(RequestWithdrawMoneyModel requestWithdrawMoneyModel);
        Task<int?> GetCollaboratorIdAsync(string userName);
        Task<List<WalletHistoryModel>> GetWalletHistoryAsync(WithdrawMoneyRange withdrawMoneyRange);
        Task<decimal?> GetWalletByTypeAsync(WalletType wallet);
        Task<List<ClientsWallet>> GetWalletClientsAsync();
        Task<string> WithdrawCommissionWalletAsync(WithdrawCommissionRequire request);
        Task<string> CreateWalletHistoryAsync(CreateWalletHistory createWalletHistory);
        Task<MemoryStream> ExportExcelCollaboratorsByParendId(WithdrawMoneyRange withdrawMoneyRange);
        Task<string> TransferMoneyAsync(TransferRequestModel transferRequestModel);

        //
        Task<List<WithdrawalRequestDto>> GetProcessingWithdrawalRequestsAsync(CollaboratorMemberManagerModel model);
        Task<MemoryStream> ExportExcelProcessingWithdrawalRequestsAsync(CollaboratorMemberManagerModel model);
        Task<bool> ApproveWithdrawal(int WithdrawalRequestId , string? note);
        Task<bool> RejectWithdrawal(int WithdrawalRequestId , string note);
        Task<List<CollaboratorDto>> GetAllCollaborators(CollaboratorMemberManagerModel model);
    }
}

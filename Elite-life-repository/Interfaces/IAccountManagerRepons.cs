using Elite_life_datacontext.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Elite_life_repository.Interfaces
{
    public interface IAccountManagerRepons
    {
        Task<List<MemberManagerModel>> GetAllAccountsAsync();
        Task<string> DeleteAccountAsync(string userName);
        Task<List<MemberManagerModel>> GetAccountsByRange(AccountRangeModel accountRangeModel);
        Task<MemoryStream> ExportExcelAccounts(AccountRangeModel accountRangeModel);
        Task<string> CreateAccountAdminAsync(AccountCreateModel accountCreateModel);
    }
}

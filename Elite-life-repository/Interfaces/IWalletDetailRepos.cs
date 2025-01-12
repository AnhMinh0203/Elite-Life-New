using Elite_life_datacontext.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Elite_life_repository.Interfaces
{
    public interface IWalletDetailRepos
    {
        Task<List<WalletDetailCommissionDto>> GetCommissionByCollaboratorId(int? CollaboratorId, int? type);
        Task<MemoryStream> ExportExcelWalletDetailAdminAsync(string date, int type);
        Task<List<WalletDetailAdminDto>> GetWalletDetailAdminAsync(string date, int type);
        Task<List<StatisticalWalletDetailDto>> GetWalletDetailAdminReportAsync(string date, int type);
    }
}

using Elite_life_datacontext.Dto;
using Elite_life_datacontext.Model;
using Elite_life_datacontext.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Elite_life_repository.Interfaces
{
    public interface ICollaboratorRepos
    {
        Task<List<CollaboratorHomeDto>> GetCollaboratorsByParendId(int CollaboratorId);
        Task<CollaboratorDto> GetCollaboratorsById(int Id);
        Task<MemoryStream> ExportExcelCollaboratorsByParendId(int CollaboratorId);
        //Customer manager
        Task<List<CollaboratorCustomerManagerDto>> GetAllCollaboratorsByParendId(CollaboratorCustomerManagerModel model);
        Task<MemoryStream> ExportExcelAllCollaboratorsByParendId(CollaboratorCustomerManagerModel model);
        // System manager
        Task<List<CollaboratorSystemManagerDto>> GetCollaboratorsSystemManager(int CollaboratorId);
        Task<decimal?> GetTotalValueWithLevelAsync(int inputId);
        // Contract manager
        Task<CollaboratorDto> GetCollaboratorsContractManager(int CollaboratorId);
        Task<List<CollaboratorDto>> GetAllCollaboratorsContractManager(DateTime? startDate, DateTime? endDate);
        Task<MemoryStream> ExportExcelAllCollaboratorsContractManager(DateTime? startDate, DateTime? endDate);
        Task<bool> UpdateContractsAsync(CollaboratorDto model);
        Task<bool> UpdateContractsImageAsync(int Id);

        //Top collaborator 
        Task<List<CollaboratorTopDto>> GetCollaboratorsTop();
        Task<MemoryStream> ExportExcelCollaboratorsTop();
        //Member manager
        Task<TotalWalletAdmin> GetTotalWalletAdmin();
        Task<List<CollaboratorDto>> GetAllCollaborators(CollaboratorMemberManagerModel model);
        Task<List<CollaboratorDto>> GetAllCollaboratorsRankUp(CollaboratorMemberManagerModel model);
        Task<List<CollaboratorDto>> GetAllCollaboratorsRankDown(CollaboratorMemberManagerModel model);
        Task<MemoryStream> ExportExcelAllCollaborators(CollaboratorMemberManagerModel model);
        Task<MemoryStream> ExportExcelAllCollaboratorsRank(CollaboratorMemberManagerRankModel model);
        Task<MemoryStream> ExportExcelAllCollaboratorsIDManager(CollaboratorMemberManagerModel model);
        //Admin delete collaborator
        Task<bool> DeleteCollaborator(int id, int idNew);

        //Nhị Phân
        Task<List<CollaboratorTreeDto>> GetCollaborators();
        List<TreeNode> BuildTree(List<CollaboratorTreeDto> collaborators);

        // Re-package
        Task<List<CollaboratorDto>> GetAllRePackageCollaborators();
        Task<MemoryStream> ExportExcelAllRePackageCollaborators();
        Task<List<CollaboratorDto>> GetAllCollaboratorsMultiOrder();
        Task<MemoryStream> ExportExcelAllCollaboratorsMultiOrder();
    }
}

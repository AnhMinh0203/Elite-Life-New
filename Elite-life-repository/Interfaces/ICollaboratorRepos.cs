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
        Task<MemoryStream> ExportExcelCollaboratorsByParendId(int CollaboratorId);
        //Customer manager
        Task<List<CollaboratorCustomerManagerDto>> GetAllCollaboratorsByParendId(CollaboratorCustomerManagerModel model);
        Task<MemoryStream> ExportExcelAllCollaboratorsByParendId(CollaboratorCustomerManagerModel model);
        // System manager
        Task<List<CollaboratorSystemManagerDto>> GetCollaboratorsSystemManager(int CollaboratorId);
        Task<decimal?> GetTotalValueWithLevelAsync(int inputId);
        // Contract manager
        Task<CollaboratorDto> GetCollaboratorsContractManager(int CollaboratorId);
        Task<bool> UpdateContractsAsync(CollaboratorDto model);
        Task<bool> UpdateContractsImageAsync(int Id);

        //Top collaborator 
        Task<List<CollaboratorTopDto>> GetCollaboratorsTop();
        Task<MemoryStream> ExportExcelCollaboratorsTop();
        //Member manager
        Task<TotalWalletAdmin> GetTotalWalletAdmin();
        Task<List<CollaboratorDto>> GetAllCollaborators(CollaboratorMemberManagerModel model);
        Task<MemoryStream> ExportExcelAllCollaborators(CollaboratorMemberManagerModel model);
        //Admin delete collaborator
        Task<bool> DeleteCollaborator(int id, int idNew);

        //Nhị Phân
        Task<List<CollaboratorTreeDto>> GetCollaborators();
        List<TreeNode> BuildTree(List<CollaboratorTreeDto> collaborators);

        // Re-package
        Task<List<CollaboratorDto>> GetAllRePackageCollaborators();
        Task<List<CollaboratorDto>> GetAllCollaboratorsMultiOrder();
    }
}

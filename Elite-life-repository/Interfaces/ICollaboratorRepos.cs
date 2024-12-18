using Elite_life_datacontext.Dto;
using Elite_life_datacontext.Model;
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
    }
}

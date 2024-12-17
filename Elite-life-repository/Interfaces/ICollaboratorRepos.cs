using Elite_life_datacontext.Dto;
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
    }
}

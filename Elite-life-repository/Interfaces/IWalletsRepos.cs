using Elite_life_datacontext.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Elite_life_repository.Interfaces
{
    public interface IWalletsRepos
    {
        Task<List<WalletsDto>> GetWalletsByCollaboratorId(int CollaboratorId);
    }
}

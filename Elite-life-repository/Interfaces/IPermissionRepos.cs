using Elite_life_datacontext.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Elite_life_repository.Interfaces
{
    public interface IPermissionRepos
    {
        Task<List<PermissionDto>> GetAllPermissionsAsync();
        Task<int> AddPermissionAsync(PermissionDto permission);
        Task<bool> UpdatePermissionAsync(PermissionDto permission);
        Task<bool> DeletePermissionAsync(int id);

        Task<List<RoleWithPermissionsDisplayDto>> GetRoleWithPermissionsAsync();
        Task<int?> CreateRoleWithPermissionsAsync(string roleName, List<int> permissionIds);
        Task<int?> UpdateRoleWithPermissionsAsync(int roleId, string roleName, List<int> permissionIds);
        Task<bool?> DeleteRoleWithPermissionsAsync(int roleId);
        Task<List<PermissionsForRoleDto>> GetPermissionsForRoleAsync(int roleId);
    }
}

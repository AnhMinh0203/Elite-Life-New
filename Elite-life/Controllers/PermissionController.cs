using Elite_life_datacontext.Dto;
using Elite_life_datacontext.Model;
using Elite_life_datacontext.Utils;
using Elite_life_repository.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Elite_life.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PermissionController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IPermissionRepos _permissionRepos;
        public PermissionController(IConfiguration configuration, IPermissionRepos permissionRepos)
        {
            _configuration = configuration;
            _permissionRepos = permissionRepos;
        }

        [HttpGet("get-all-permissions")]
        public async Task<MethodResult> GetAllPermisstion()
        {
            var result = await _permissionRepos.GetAllPermissionsAsync();
            if (result != null)
            {
                return MethodResult.ResultWithSuccess(result, 200, "Success");

            }
            return MethodResult.ResultWithError(null, 400, "Not Found");
        }

        [HttpPost("add-permission")]
        public async Task<MethodResult> AddPermission(PermissionDto permission)
        {
            var result = await _permissionRepos.AddPermissionAsync(permission);
            if (result > 0)
            {
                return MethodResult.ResultWithSuccess(result, 200, "Success");

            }
            return MethodResult.ResultWithError(null, 400, "Error");
        }

        [HttpPut("update-permission")]
        public async Task<MethodResult> UpdatePermission(PermissionDto permission)
        {
            var result = await _permissionRepos.UpdatePermissionAsync(permission);
            if (result)
            {
                return MethodResult.ResultWithSuccess(result, 200, "Success");

            }
            return MethodResult.ResultWithError(null, 400, "Error");
        }

        [HttpDelete("delete-permission/{id}")]
        public async Task<MethodResult> DeletePermission(int id)
        {
            var result = await _permissionRepos.DeletePermissionAsync(id);
            if (result)
            {
                return MethodResult.ResultWithSuccess(result, 200, "Success");

            }
            return MethodResult.ResultWithError(null, 400, "Error");
        }

        [HttpGet("get-role-with-permissions")]
        public async Task<MethodResult> GetRoleWithPermissions()
        {
            var result = await _permissionRepos.GetRoleWithPermissionsAsync();
            if (result != null)
            {
                return MethodResult.ResultWithSuccess(result, 200, "Success");

            }
            return MethodResult.ResultWithError(null, 400, "Not Found");
        }

        [HttpPost("add-role-with-permissions")]
        public async Task<MethodResult> CreateRoleWithPermissions(AddRoleWithPermissionsModel model)
        {
            var result = await _permissionRepos.CreateRoleWithPermissionsAsync(model.RoleName, model.PermissionIds);
            if (result != null)
            {
                return MethodResult.ResultWithSuccess(result, 200, "Success");

            }
            return MethodResult.ResultWithError(null, 400, "Error");
        }

        [HttpPut("update-role-with-permissions")]
        public async Task<MethodResult> UpdateRoleWithPermissions(UpdateRoleWithPermissionsModel model)
        {
            var result = await _permissionRepos.UpdateRoleWithPermissionsAsync(model.RoleId, model.RoleName, model.PermissionIds);
            if (result != null)
            {
                return MethodResult.ResultWithSuccess(result, 200, "Success");

            }
            return MethodResult.ResultWithError(null, 400, "Error");
        }

        [HttpDelete("delete-role-with-permissions/{roleId}")]
        public async Task<MethodResult> DeleteRoleWithPermissions(int roleId)
        {
            var result = await _permissionRepos.DeleteRoleWithPermissionsAsync(roleId);
            if (result != null)
            {
                return MethodResult.ResultWithSuccess(result, 200, "Success");

            }
            return MethodResult.ResultWithError(null, 400, "Error");
        }

        [HttpGet("get-permissions-for-role/{roleId}")]
        public async Task<MethodResult> GetPermissionsForRole(int roleId)
        {
            var result = await _permissionRepos.GetPermissionsForRoleAsync(roleId);
            if (result != null)
            {
                return MethodResult.ResultWithSuccess(result, 200, "Success");

            }
            return MethodResult.ResultWithError(null, 400, "Error");
        }
    }
}

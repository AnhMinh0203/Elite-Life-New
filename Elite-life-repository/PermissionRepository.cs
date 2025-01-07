using Dapper;
using Elite_life_datacontext.DataBase;
using Elite_life_datacontext.Dto;
using Elite_life_repository.Interfaces;
using Microsoft.AspNetCore.SignalR.Protocol;
using Microsoft.Extensions.Configuration;
using Npgsql;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security;
using System.Text;
using System.Threading.Tasks;

namespace Elite_life_repository
{
    public class PermissionRepository : IPermissionRepos
    {
        private readonly IConfiguration _configuration;
        public PermissionRepository(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public async Task<int> AddPermissionAsync(PermissionDto permission)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();

            try
            {
                var query = @"SELECT dbo.add_permission(
                    @Code,
                    @Name,
                    @Action,
                    @Controller,
                    @ApplicationType
                );";

                return await connection.ExecuteScalarAsync<int>(query, new
                {
                    permission.Code,
                    permission.Name,
                    permission.Action,
                    permission.Controller,
                    permission.ApplicationType
                });
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error fetching GetAllRePackageCollaborators: {ex.Message}");
                return 0;
            }
            finally
            {
                await connection.CloseAsync();
            }
        }

        public async Task<int?> CreateRoleWithPermissionsAsync(string roleName, List<int> permissionIds)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();

            try
            {
                var createRoleQuery = @"SELECT dbo.create_role_with_permissions(@RoleName, @PermissionIds);";

                var result = await connection.QuerySingleOrDefaultAsync<int?>(createRoleQuery, new
                {
                    RoleName = roleName,
                    PermissionIds = permissionIds.ToArray()
                });
                if (result.HasValue)
                {
                    return result.Value; 
                }
                else
                {
                    return null; 
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error creating role with permissions: {ex.Message}");
                return null;
            }
            finally
            {
                await connection.CloseAsync();
            }
        }

        public async Task<bool> DeletePermissionAsync(int id)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();

            try
            {
                var query = @"SELECT dbo.delete_permission(@Id);";

                return await connection.ExecuteScalarAsync<bool>(query, new { Id = id });
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error fetching GetAllRePackageCollaborators: {ex.Message}");
                return false;
            }
            finally
            {
                await connection.CloseAsync();
            }
        }

        public async Task<bool?> DeleteRoleWithPermissionsAsync(int roleId)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();

            try
            {
                var query = @"SELECT dbo.delete_role_with_permissions(@RoleId);";

                return await connection.ExecuteScalarAsync<bool>(query, new
                {
                    roleId = roleId
                });
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error fetching DeleteRoleWithPermissionsAsync: {ex.Message}");
                return false;
            }
            finally
            {
                await connection.CloseAsync();
            }
        }

        public async Task<List<PermissionDto>> GetAllPermissionsAsync()
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();

            try
            {
                var query = @"SELECT * FROM dbo.get_all_permissions()";

                var result = (await connection.QueryAsync<PermissionDto>(query)).AsList();
                return result;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error fetching GetAllPermissionsAsync: {ex.Message}");
                return new List<PermissionDto>();
            }
            finally
            {
                await connection.CloseAsync();
            }
        }

        public async Task<List<PermissionsForRoleDto>> GetPermissionsForRoleAsync(int roleId)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();

            try
            {
                var query = @"SELECT * FROM dbo.get_permissions_for_role(@RoleId)";

                var result = (await connection.QueryAsync<PermissionsForRoleDto>(query, new { RoleId = roleId })).ToList();
                return result;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error fetching GetPermissionsForRoleAsync: {ex.Message}");
                return new List<PermissionsForRoleDto>();
            }
            finally
            {
                await connection.CloseAsync();
            }
        }

        public async Task<List<RoleWithPermissionsDisplayDto>> GetRoleWithPermissionsAsync()
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();

            try
            {
                var query = @"SELECT * FROM dbo.get_role_and_permissions()";

                var result = (await connection.QueryAsync<RoleWithPermissionsDto>(query)).ToList();

                var mappedResult = result.Select(row => new RoleWithPermissionsDisplayDto
                {
                    RoleId = row.role_id_output,
                    RoleName = row.role_name_output,
                    Permissions = row.permissions_list != null
                          ? row.permissions_list.Split(new[] { ',' }, StringSplitOptions.RemoveEmptyEntries)
                                           .Select(p => p.Trim())
                                           .ToList()
                          : new List<string>()
                }).ToList();

                return mappedResult;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error fetching GetRoleWithPermissionsAsync: {ex.Message}");
                return new List<RoleWithPermissionsDisplayDto>();
            }
            finally
            {
                await connection.CloseAsync();
            }
        }


        public async Task<bool> UpdatePermissionAsync(PermissionDto permission)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();

            try
            {
                var query = @"SELECT dbo.update_permission(
                    @Id,
                    @Code,
                    @Name,
                    @Action,
                    @Controller,
                    @ApplicationType
                );";

                return await connection.ExecuteScalarAsync<bool>(query, new
                {
                    permission.Id,
                    permission.Code,
                    permission.Name,
                    permission.Action,
                    permission.Controller,
                    permission.ApplicationType
                });
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error fetching GetAllRePackageCollaborators: {ex.Message}");
                return false;
            }
            finally
            {
                await connection.CloseAsync();
            }
        }

        public async Task<int?> UpdateRoleWithPermissionsAsync(int roleId, string roleName, List<int> permissionIds)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();

            try
            {
                var createRoleQuery = @"SELECT dbo.update_role_with_permissions(@RoleId, @RoleName, @PermissionIds);";

                var result = await connection.QuerySingleOrDefaultAsync<int?>(createRoleQuery, new
                {
                    RoleId = roleId,
                    RoleName = roleName,
                    PermissionIds = permissionIds.ToArray()
                });
                if (result.HasValue)
                {
                    return result.Value;
                }
                else
                {
                    return null;
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error updateing role with permissions: {ex.Message}");
                return null;
            }
            finally
            {
                await connection.CloseAsync();
            }
        }
    }
}

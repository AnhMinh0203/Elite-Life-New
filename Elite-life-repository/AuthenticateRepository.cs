using Dapper;
using Elite_life_datacontext.DataBase;
using Elite_life_repository.Interfaces;
using Elite_life_datacontext.Dto;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Elite_life_datacontext.Model;
using Elite_life_datacontext.Utils;
using Npgsql;
using System.Data;

namespace Elite_life_repository
{
    public class AuthenticateRepository : IAuthenticateRepos
    {
        private readonly IConfiguration _configuration;
        private readonly PasswordManager _passwordManager;
        public AuthenticateRepository(IConfiguration configuration, PasswordManager passwordManager)
        {
            _configuration = configuration;
            _passwordManager = passwordManager;
        }

        public bool CheckPasswordAsync(string password, string hashPassword)
        {
            var salt = _passwordManager.GenerateSalt(); 
            var hashedPassword = _passwordManager.HashPassword(password, salt);
            return hashedPassword == hashPassword;
        }

        public async Task<int> CreateUserAsync(RegisterModel model)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();

            try
            {
                var salt = _passwordManager.GenerateSalt();
                var hashedPassword = _passwordManager.HashPassword(model.Password, salt);

                var query = @"CALL dbo.CreateUser(
                            @p_Username, 
                            @p_Password, 
                            @p_DisplayName, 
                            @p_Email, 
                            @p_Mobile, 
                            @p_Address, 
                            @p_Permission, 
                            @p_ApplicationType, 
                            @p_Identity, 
                            @p_IdentityDate, 
                            @p_IdentityPlace, 
                            @p_ParentId, 
                            @p_BankId, 
                            @p_BankOwner, 
                            @p_BankNumber, 
                            @p_BankBranchName)";

                using var command = new NpgsqlCommand(query, connection);

                command.Parameters.AddWithValue("@p_Username", model.Username);
                command.Parameters.AddWithValue("@p_Password", hashedPassword); 
                command.Parameters.AddWithValue("@p_DisplayName", model.DisplayName);
                command.Parameters.AddWithValue("@p_Email", model.Email ?? (object)DBNull.Value);
                command.Parameters.AddWithValue("@p_Mobile", model.Mobile ?? (object)DBNull.Value);
                command.Parameters.AddWithValue("@p_Address", model.Address);
                command.Parameters.AddWithValue("@p_Permission", model.Permission);
                command.Parameters.AddWithValue("@p_ApplicationType", "Sale");
                command.Parameters.AddWithValue("@p_Identity", model.Identity);
                command.Parameters.AddWithValue("@p_IdentityDate", model.IdentityDate);
                command.Parameters.AddWithValue("@p_IdentityPlace", model.IdentityPlace);
                command.Parameters.AddWithValue("@p_ParentId", model.ParentId);
                command.Parameters.AddWithValue("@p_BankId", model.BankId);
                command.Parameters.AddWithValue("@p_BankOwner", model.BankOwner);
                command.Parameters.AddWithValue("@p_BankNumber", model.BankNumber);
                command.Parameters.AddWithValue("@p_BankBranchName", model.BankBranchName);
                var createdIdParam = new NpgsqlParameter("createdId", DbType.Int32)
                {
                    Direction = ParameterDirection.Output
                };

                await command.ExecuteNonQueryAsync();
                int createdId = (int)createdIdParam.Value;
                return createdId;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error creating user: {ex.Message}");
                return -1;
            }
            finally
            {
                await connection.CloseAsync();
            }
        }

        public async Task<CollaboratorDto> FindByUserNameAsync(string Username)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();
            try
            {
                var query = @"SELECT * FROM dbo.""Collaborators"" where ""UserName"" = '" + Username + "' ";
                var user = await connection.QueryFirstOrDefaultAsync<CollaboratorDto>(query);
                return user;
            }
            catch (Exception ex) {
                Console.WriteLine($"Error finding user: {ex.Message}");
                return null;
            }
            finally
            {
                await connection.CloseAsync();
            }
        }

        public async Task<List<CollaboratorDto>> GetAllUsersAsync()
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = connectPostgres.CreateConnection();
            try
            {
                var query = @"SELECT * FROM dbo.""Collaborators""";
                var users = await connection.QueryAsync<CollaboratorDto>(query);
                return users.ToList();
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error getting all users: {ex.Message}");
                return null;
            }
            finally
            {
                connection.Close();
            }
        }

        public async Task<int> RegisterAdminAsync(RegisterModel model)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();
            try
            {
                var salt = _passwordManager.GenerateSalt();
                var hashedPassword = _passwordManager.HashPassword(model.Password, salt);

                var query = @"CALL dbo.CreateAdmin(
                            @p_Username, 
                            @p_Password, 
                            @p_DisplayName, 
                            @p_Email, 
                            @p_Mobile, 
                            @p_Address, 
                            @p_Permission, 
                            @p_ApplicationType, 
                            @p_Identity, 
                            @p_IdentityDate, 
                            @p_IdentityPlace, 
                            @p_ParentId, 
                            @p_BankId, 
                            @p_BankOwner, 
                            @p_BankNumber, 
                            @p_BankBranchName)";

                using var command = new NpgsqlCommand(query, connection);

                command.Parameters.AddWithValue("@p_Username", model.Username);
                command.Parameters.AddWithValue("@p_Password", hashedPassword);
                command.Parameters.AddWithValue("@p_DisplayName", model.DisplayName);
                command.Parameters.AddWithValue("@p_Email", model.Email ?? (object)DBNull.Value);
                command.Parameters.AddWithValue("@p_Mobile", model.Mobile ?? (object)DBNull.Value);
                command.Parameters.AddWithValue("@p_Address", model.Address);
                command.Parameters.AddWithValue("@p_Permission", model.Permission);
                command.Parameters.AddWithValue("@p_ApplicationType", model.ApplicationType);
                command.Parameters.AddWithValue("@p_Identity", model.Identity);
                command.Parameters.AddWithValue("@p_IdentityDate", model.IdentityDate);
                command.Parameters.AddWithValue("@p_IdentityPlace", model.IdentityPlace);
                command.Parameters.AddWithValue("@p_ParentId", model.ParentId);
                command.Parameters.AddWithValue("@p_BankId", model.BankId);
                command.Parameters.AddWithValue("@p_BankOwner", model.BankOwner);
                command.Parameters.AddWithValue("@p_BankNumber", model.BankNumber);
                command.Parameters.AddWithValue("@p_BankBranchName", model.BankBranchName);

                var createdIdParam = new NpgsqlParameter("createdId", DbType.Int32)
                {
                    Direction = ParameterDirection.Output
                };

                await command.ExecuteNonQueryAsync();
                int createdId = (int)createdIdParam.Value;
                return createdId;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error creating user: {ex.Message}");
                return -1;
            }
            finally
            {
                await connection.CloseAsync();
            }
        }

        public async Task<bool> UpdateRefreshTokenAsync(int Id, string RefreshToken, DateTime RefreshTokenExpiryTime)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();

            try
            {
                var query = @"CALL dbo.UpdateRefreshToken(@p_Id, @p_RefreshToken, @p_RefreshTokenExpiryTime)";
                using var command = new NpgsqlCommand(query, connection);

                command.Parameters.Add("@p_Id", NpgsqlTypes.NpgsqlDbType.Integer).Value = Id;
                command.Parameters.Add("@p_RefreshToken", NpgsqlTypes.NpgsqlDbType.Varchar).Value = RefreshToken ?? (object)DBNull.Value;
                command.Parameters.Add("@p_RefreshTokenExpiryTime", NpgsqlTypes.NpgsqlDbType.Timestamp).Value = RefreshTokenExpiryTime; 

                var result = await command.ExecuteNonQueryAsync();
                return result > 0;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error updating refresh token: {ex.Message}");
                return false;
            }
            finally
            {
                await connection.CloseAsync();
            }
        }
    }
}

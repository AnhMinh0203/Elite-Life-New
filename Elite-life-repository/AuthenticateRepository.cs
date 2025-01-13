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
using NpgsqlTypes;

namespace Elite_life_repository
{
    public class AuthenticateRepository : IAuthenticateRepos
    {
        private readonly IConfiguration _configuration;
        private readonly PasswordManager _passwordManager;
        public AuthenticateRepository(IConfiguration configuration, PasswordManager passwordManager)
        {
            AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
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

            string baseDirectory = AppDomain.CurrentDomain.BaseDirectory;
            string avatarFolderPath = Path.Combine(baseDirectory, "Avatar");

            if (!Directory.Exists(avatarFolderPath))
            {
                Directory.CreateDirectory(avatarFolderPath);
            }

            string avatarFileName = null;

            // Nếu có tệp Avatar, lưu vào thư mục
            if (model.Avatar != null && model.Avatar.Length > 0)
            {
                // Đặt tên tệp (có thể dùng GUID hoặc tên gốc)
                avatarFileName = $"{Guid.NewGuid()}{Path.GetExtension(model.Avatar.FileName)}";

                string avatarFilePath = Path.Combine(avatarFolderPath, avatarFileName);

                // Lưu tệp vào đường dẫn
                await using (var fileStream = new FileStream(avatarFilePath, FileMode.Create))
                {
                    await model.Avatar.CopyToAsync(fileStream);
                }
            }


            var salt = _passwordManager.GenerateSalt();
            var hashedPassword = _passwordManager.HashPassword(model.Password, salt);

            var query = @"
                SELECT * FROM dbo.create_user(
                     @p_password, @p_displayname, @p_email, @p_mobile, 
                    @p_applicationtype, @p_identity, @p_identitydate, @p_identityplace, 
                    @p_parentcode, @p_bankid, @p_bankowner, @p_banknumber, @p_bankbranchname, @p_avatarpath
                )";

            var parameters = new
            {
                p_password = hashedPassword,
                p_displayname = (object?)model.DisplayName ?? DBNull.Value,
                p_email = (object?)model.Email ?? DBNull.Value,
                p_mobile = (object?)model.Mobile ?? DBNull.Value,
                p_applicationtype = model.ApplicationType ?? "Sale",
                p_identity = (object?)model.Identity ?? DBNull.Value,
                p_identitydate = model.IdentityDate,
                p_identityplace = (object?)model.IdentityPlace ?? DBNull.Value,
                p_parentcode = (object?)model.ParentCode ?? DBNull.Value,
                p_bankid = (object?)model.BankId ?? DBNull.Value,
                p_bankowner = (object?)model.BankOwner ?? DBNull.Value,
                p_banknumber = (object?)model.BankNumber ?? DBNull.Value,
                p_bankbranchname = (object?)model.BankBranchName ?? DBNull.Value,
                p_avatarpath = (object?)avatarFileName ?? DBNull.Value
            };

            var createdId = await connection.QuerySingleAsync<int>(query, parameters);
            return createdId;
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

        public async Task<CollaboratorDto> FindByUserNameAdminAsync(string Username)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();
            try
            {
                var query = @"SELECT * FROM dbo.""Collaborators"" 
                      WHERE ""UserName"" = @UserName 
                      AND ""ApplicationType"" = @ApplicationType";

                var parameters = new
                {
                    UserName = Username, // Giá trị được truyền vào từ biến
                    ApplicationType = "User"
                };
                var user = await connection.QueryFirstOrDefaultAsync<CollaboratorDto>(query, parameters);
                return user;
            }
            catch (Exception ex)
            {
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

                command.Parameters.AddWithValue("@p_Password", hashedPassword);
                command.Parameters.AddWithValue("@p_DisplayName", model.DisplayName);
                command.Parameters.AddWithValue("@p_Email", model.Email ?? (object)DBNull.Value);
                command.Parameters.AddWithValue("@p_Mobile", model.Mobile ?? (object)DBNull.Value);
/*                command.Parameters.AddWithValue("@p_Address", model.Address);
                command.Parameters.AddWithValue("@p_Permission", model.Permission);*/
                command.Parameters.AddWithValue("@p_ApplicationType", model.ApplicationType);
                command.Parameters.AddWithValue("@p_Identity", model.Identity);
                command.Parameters.AddWithValue("@p_IdentityDate", model.IdentityDate);
                command.Parameters.AddWithValue("@p_IdentityPlace", model.IdentityPlace);
                command.Parameters.AddWithValue("@p_ParentId", model.ParentCode);
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

        public async Task<List<string>> GetBanksAsync()
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();
            try
            {
                var query = @"SELECT ""Name"" FROM dbo.""Banks""";
                var banks = await connection.QueryAsync<string>(query);
                return banks.ToList();
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error getting all banks: {ex.Message}");
                return null;
            }
            finally
            {
                connection.Close();
            }
        }

        public async Task<bool> CheckParentAsync (CheckParentRequestModel request)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();
            try
            {
                var query = @"SELECT COUNT(1) FROM dbo.""Users"" WHERE ""UserName"" = @UserName";
                var result = await connection.ExecuteScalarAsync<int>(query, new {request.UserName });
                return result > 0;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error checking parent: {ex.Message}");
                return false;
            }
            finally
            {
                connection.Close();
            }
        }

        public async Task<int> GetBankIdAsync (GetBankIdRequestModel request)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();
            try
            {
                var query = @"select ""Id"" from dbo.""Banks"" where ""Name"" = @BankName";
                var result = await connection.ExecuteScalarAsync<int?>(query, new {request.BankName });
                if (result.HasValue)
                {
                    return result.Value;
                }
                else
                {     
                    Console.WriteLine($"Không tìm thấy ngân hàng: {request.BankName}");
                    return -1;  
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Lỗi: {ex.Message}");
                return -1;
            }
            finally
            {
                connection.Close();
            }
        }

        public async Task<List<string>> GetPermissionsAsync(string Username)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = connectPostgres.CreateConnection();
            try
            {
                var query = @"select * from dbo.get_user_permissions(@username_input)";
                var parameters = new
                {
                    username_input = Username,
                };
                var users = await connection.QueryAsync<string>(query, parameters);
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

        public async Task<CollaboratorDto> GetCollaboratorsByUserName(string UserName)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();
            try
            {
                const string query = @"SELECT * FROM dbo.""Collaborators"" WHERE ""UserName"" = @UserName;";
                var result = await connection.QueryFirstOrDefaultAsync<CollaboratorDto>(query, new { UserName = UserName });
                return result;
            }
            catch (Exception ex)
            {
                // Use a proper logging framework instead of Console.WriteLine
                Console.WriteLine($"Error retrieving collaborator by username: {ex.Message}");
                return null;
            }
        }

        public async Task<bool> UpdatePassword(string UserName, string Password)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();
            try
            {
                var salt = _passwordManager.GenerateSalt();
                var hashedPassword = _passwordManager.HashPassword(Password, salt);
                var query = @"SELECT dbo.update_password(@user_name, @new_password)";
                var parameters = new
                {
                    user_name = UserName, 
                    new_password = hashedPassword
                };

                var result = await connection.ExecuteScalarAsync<bool>(query, parameters);
                return result;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error updating password: {ex.Message}");
                return false; 
            }
            finally
            {
                connection.Close(); 
            }
        }
    }
}

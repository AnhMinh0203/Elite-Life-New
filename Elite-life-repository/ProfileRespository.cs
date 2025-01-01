using Confluent.Kafka;
using Dapper;
using Elite_life_datacontext.DataBase;
using Elite_life_datacontext.Model;
using Elite_life_datacontext.Utils;
using Elite_life_repository.Interfaces;
using Microsoft.Extensions.Configuration;
using Npgsql;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace Elite_life_repository
{
    public class ProfileRespository: IProfileRepos
    {
        private readonly IConfiguration _configuration;
        private readonly PasswordManager _passwordManager;
        public ProfileRespository(IConfiguration configuration, PasswordManager passwordManager)
        {
            _configuration = configuration;
            _passwordManager = passwordManager;
        }

        public async Task<ProfileModel> GetProfileAsync (string UserName)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();

            var query = "SELECT * FROM dbo.get_profile(@p_username)";
            var parameters = new { p_username = UserName };

            return connection.QuerySingleOrDefault<ProfileModel>(query, parameters);

        }

        public async Task<string> UpdateProfileAsync (ProfileUpdateModel profileUpdateModel)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();
            try
            {
                var command = connection.CreateCommand(); 
                command.CommandText =
                    @"SELECT dbo.update_profile( 
                    @p_username, 
                    @p_displayname, 
                    @p_identity, 
                    @p_banknumber, 
                    @p_bank,
                    @p_identitydate,
                    @p_bankowner,
                    @p_identityplace,
                    @p_bankbranchname);"; 

                command.Parameters.AddWithValue("p_username", profileUpdateModel.UserName); 
                command.Parameters.AddWithValue("p_displayname", profileUpdateModel.Name); 
                command.Parameters.AddWithValue("p_identity", profileUpdateModel.Identity); 
                command.Parameters.AddWithValue("p_banknumber", profileUpdateModel.BankNumber); 
                command.Parameters.AddWithValue("p_bank", profileUpdateModel.Bank);
                command.Parameters.AddWithValue("p_identitydate", profileUpdateModel.IdentityDate);
                command.Parameters.AddWithValue("p_bankowner", profileUpdateModel.BankOwner);
                command.Parameters.AddWithValue("p_identityplace", profileUpdateModel.IdentityPlace);
                command.Parameters.AddWithValue("p_bankbranchname", profileUpdateModel.BankBranchName);
                string result = (string)await command.ExecuteScalarAsync();
                return result;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error creating user: {ex.Message}");
                return $"Error: {ex.Message}";
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

        public async Task<string> UpdateProfileContactInfoAsync (ProfileContactInfo profileContactInfo)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();

            try
            {
                var query = @"SELECT dbo.update_profile_contact_infor(@p_username, @p_email, @p_mobile)";
                using var command = new NpgsqlCommand(query, connection);

                command.Parameters.AddWithValue("p_username", profileContactInfo.UserName);
                command.Parameters.AddWithValue("p_email", (object)profileContactInfo.Email ?? DBNull.Value); 
                command.Parameters.AddWithValue("p_mobile", (object)profileContactInfo.PhoneNumber ?? DBNull.Value);
                var result = await command.ExecuteScalarAsync() as string;

                return result;  
            }
            catch (Exception ex)
            {

                Console.WriteLine($"Error getting all banks: {ex.Message}");
                return "An error occurred during the update.";
            }
            finally
            {
                connection.Close();
            }
        }

        public async Task<(bool IsMatch, string ErrorMessage)> CheckCurrentPassAsync(ProfilePasswordModel checkPasswordModel)
        {
            var salt = _passwordManager.GenerateSalt();
            var hashedPassword = _passwordManager.HashPassword(checkPasswordModel.Password, salt);

            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();

            try
            {
                var query = @"SELECT dbo.get_passwordHash(@p_username)";    
                using var command = new NpgsqlCommand(query, connection);

                command.Parameters.AddWithValue("p_username", checkPasswordModel.UserName);
                var storedHash = (string)await command.ExecuteScalarAsync();
                return (hashedPassword == storedHash, null);

            }
            catch (Exception ex)
            {

                Console.WriteLine($"Error getting all banks: {ex.Message}");
                return (false, "Internal server error");

            }
            finally
            {
                connection.Close();
            }
        }

        public async Task<string> ChangePassAsync(ProfilePasswordModel changePasswordModel)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();

            var salt = _passwordManager.GenerateSalt();
            var hashedPassword = _passwordManager.HashPassword(changePasswordModel.Password, salt);

            try
            {
                var query = @"SELECT dbo.change_password(@p_username, @p_password)";
                using var command = new NpgsqlCommand(query, connection);

                command.Parameters.AddWithValue("p_username", changePasswordModel.UserName);
                command.Parameters.AddWithValue("p_password", hashedPassword);

                var result = await command.ExecuteScalarAsync() as string;

                return result;
            }
            catch (Exception ex)
            {

                Console.WriteLine($"Error getting all banks: {ex.Message}");
                return "An error occurred during the update.";
            }
            finally
            {
                connection.Close();
            }
        }
    }
}

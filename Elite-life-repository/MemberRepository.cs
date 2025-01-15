using Dapper;
using Elite_life_datacontext.DataBase;
using Elite_life_datacontext.Model;
using Elite_life_repository.Interfaces;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Elite_life_repository
{
    public class MemberRepository: IMemberManagerRepons
    {
        private readonly IConfiguration _configuration;
        public MemberRepository(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public async Task<List<MemberManagerModel>> GetAllMembersAsync()
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();
            try
            {
                var query = @"SELECT ""UserName"", ""Name"", ""Email"" FROM dbo.""Collaborators""";
                var members = await connection.QueryAsync<MemberManagerModel>(query);
                return members.ToList();
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
    }
}

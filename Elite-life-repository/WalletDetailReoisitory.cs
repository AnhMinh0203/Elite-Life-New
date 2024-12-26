using Dapper;
using Elite_life_datacontext.DataBase;
using Elite_life_datacontext.Dto;
using Elite_life_repository.Interfaces;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Elite_life_repository
{
    public class WalletDetailReoisitory : IWalletDetailRepos
    {
        private readonly IConfiguration _configuration;
        public WalletDetailReoisitory(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public async Task<List<WalletDetailCommissionDto>> GetCommissionByCollaboratorId(int CollaboratorId, int? type)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();
            int TotalRecords = 0;
            try
            {
                var query = @"SELECT * FROM dbo.get_wallet_details(@collaborator_id)";
                if(type == 1)
                {
                    query = @"SELECT * FROM dbo.get_wallet_gratitude_details(@collaborator_id)";
                }
                if(type == 2)
                {
                    query = @"SELECT * FROM dbo.get_wallet_source_details(@collaborator_id)";
                }
                var parameters = new
                {
                    collaborator_id = CollaboratorId
                };
                var result = (await connection.QueryAsync<WalletDetailCommissionDto>(query, parameters)).AsList();

                return (result);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error fetching GetCommissionByCollaboratorId: {ex.Message}");
                return new List<WalletDetailCommissionDto>();
            }
            finally
            {
                await connection.CloseAsync();
            }
        }
    }
}

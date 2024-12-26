using Dapper;
using Elite_life_datacontext.DataBase;
using Elite_life_datacontext.Dto;
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
    public class WalletsRepository : IWalletsRepos
    {
        private readonly IConfiguration _configuration;
        public WalletsRepository(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public async Task<List<WalletsDto>> GetWalletsByCollaboratorId(int CollaboratorId)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();
            try
            {
                var query = "SELECT * FROM dbo.Get_Wallets_By_CollaboratorId(@p_CollaboratorId)";

                var parameters = new
                {
                    p_CollaboratorId = CollaboratorId
                };
                var result = (await connection.QueryAsync<WalletsDto>(query, parameters)).AsList();

                return result;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error fetching GetWalletsByCollaboratorId: {ex.Message}");
                return new List<WalletsDto>();
            }
            finally
            {
                await connection.CloseAsync();
            }
        }

        public async Task<bool> Recharge(WalletRechargeModel model)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();
            try
            {
                var query = "SELECT * FROM DBO.recharge_wallet(@p_CollaboratorId, @p_Amount, @p_Description)";

                var parameters = new
                {
                    p_CollaboratorId = model.CollaboratorId,
                    p_Amount = model.Amount,
                    p_Description = model.Description
                };

                var walletDetailId = await connection.QuerySingleOrDefaultAsync<int?>(query, parameters);

                if (walletDetailId > 0)
                {
                    return true;
                }
                else
                {
                    Console.WriteLine("No rows were affected during the recharge operation.");
                    return false;
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error executing Recharge: {ex.Message}");
                return false;
            }
            finally
            {
                await connection.CloseAsync();
            }
        }

    }
}

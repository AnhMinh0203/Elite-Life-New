using Dapper;
using Elite_life_datacontext.DataBase;
using Elite_life_datacontext.Dto;
using Elite_life_datacontext.Model;
using Elite_life_datacontext.Utils;
using Elite_life_repository.Interfaces;
using Microsoft.Extensions.Configuration;
using Npgsql;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Elite_life_repository
{
    public class StatisticalRepository : IStatisticalRepos
    {
        private readonly IConfiguration _configuration;
        public StatisticalRepository(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public async Task<List<StatisticalDto>> GetStatisticalDailyWalletAsync(StatisticalModel model)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();
            try
            {
                var query = "SELECT * FROM dbo.get_daily_wallet_summary(@Month, @Year, @CollaboratorId)";

                var parameters = new
                {
                    Month = model.Month,
                    Year = model.Year,
                    CollaboratorId = model.CollaboratorId
                };
                var result = (await connection.QueryAsync<StatisticalDto>(query, parameters)).AsList();

                return result;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error fetching wallet statistics: {ex.Message}");
                return new List<StatisticalDto>(); 
            }
            finally
            {
                await connection.CloseAsync();
            }
        }
    }
}

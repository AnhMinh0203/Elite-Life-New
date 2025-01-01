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
        public async Task<List<WalletDetailCommissionDto>> GetCommissionByCollaboratorId(int? CollaboratorId, int? type)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();
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

        public async Task<List<WalletDetailAdminDto>> GetWalletDetailAdminAsync(string date, int type)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();
            try
            {
                var query = "";
                if(type == 1)
                {
                    query = @"SELECT * FROM dbo.get_wallet_comission_details_by_month_year(@input_date)";
                }
                else if (type == 2)
                {
                    query = @"SELECT * FROM dbo.get_wallet_gratitude_details_by_month_year(@input_date)";
                }
                else if (type == 3)
                {
                    query = @"SELECT * FROM dbo.get_wallet_source_details_by_month_year(@input_date)";
                }
                else
                {
                    query = @"SELECT * FROM dbo.get_wallet_c_details_by_month_year(@input_date)";
                }
                var parameters = new
                {
                    input_date = date
                };
                var result = (await connection.QueryAsync<WalletDetailAdminDto>(query, parameters)).AsList();

                return (result);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error fetching GetWalletDetailAdminAsync: {ex.Message}");
                return new List<WalletDetailAdminDto>();
            }
            finally
            {
                await connection.CloseAsync();
            }
        }

        public async Task<List<StatisticalWalletDetailDto>> GetWalletDetailAdminReportAsync(string date, int type)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();
            try
            {
                var query = "";
                if (type == 1)
                {
                    query = @"SELECT * FROM dbo.get_wallet_comission_by_hour(@input_date)";
                }
                else if (type == 2)
                {
                    query = @"SELECT * FROM dbo.get_wallet_gratitude_by_hour(@input_date)";
                }
                else if (type == 3)
                {
                    query = @"SELECT * FROM dbo.get_wallet_source_by_hour(@input_date)";
                }
                else
                {
                    query = @"SELECT * FROM dbo.get_wallet_c_by_hour(@input_date)";
                }
                var parameters = new
                {
                    input_date = date
                };
                var result = (await connection.QueryAsync<StatisticalWalletDetailDto>(query, parameters)).AsList();

                return (result);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error fetching GetWalletDetailAdminReportAsync: {ex.Message}");
                return new List<StatisticalWalletDetailDto>();
            }
            finally
            {
                await connection.CloseAsync();
            }
        }
    }
}

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
    public class OrderRepository : IOrderRepos
    {
        private readonly IConfiguration _configuration;
        public OrderRepository(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public async Task<List<OrderBillDto>> GetBillOrderInfoAsync(int OrderId)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();
            int TotalRecords = 0;
            try
            {
                var query = @"SELECT * FROM dbo.get_order_details(@order_id)";
                var parameters = new
                {
                    order_id = OrderId
                };
                var result = (await connection.QueryAsync<OrderBillDto>(query, parameters)).AsList();

                return (result);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error fetching GetBillOrderInfoAsync: {ex.Message}");
                return new List<OrderBillDto>();
            }
            finally
            {
                await connection.CloseAsync();
            }
        }

        public async Task<List<OrderInfoDto>> GetOrderInfoAsync(CollaboratorMemberManagerModel model)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();
            try
            {
                var query = @"SELECT * FROM dbo.get_order_info(@StartDate, @EndDate)";

                var parameters = new
                {
                    StartDate = model.StartDate?.ToString("yyyy-MM-dd"),
                    EndDate = model.EndDate?.ToString("yyyy-MM-dd")
                };

                var result = (await connection.QueryAsync<OrderInfoDto>(query, parameters)).AsList();

                return result;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error fetching GetOrderInfoAsync: {ex.Message}");
                return new List<OrderInfoDto>();
            }
            finally
            {
                await connection.CloseAsync();
            }
        }


        public async Task<bool> UpdateOrderDeliveryDate(OrderDeliveryDateModel model)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();

            try
            {
                var query = @"SELECT * FROM dbo.update_order_delivery_date(@input_id, @input_delivery_date)";
                var parameters = new
                {
                    input_id = model.Id,
                    input_delivery_date = model.DeliveryDate.Value.ToString("yyyy-MM-dd HH:mm:ss")
                };

                var result = (await connection.QueryAsync<OrderDeliveryDateDto>(query, parameters)).AsList();
                if (result == null || !result.Any() || result.First().DeliveryDate == null)
                    return false;

                return true;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error updating delivery date. Id: {model.Id}, DeliveryDate: {model.DeliveryDate}. Exception: {ex.Message}");
                return false;
            }
            finally
            {
                await connection.CloseAsync();
            }
        }

    }
}

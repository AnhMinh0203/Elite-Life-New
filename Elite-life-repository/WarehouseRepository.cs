using Dapper;
using Elite_life_datacontext.DataBase;
using Elite_life_datacontext.Dto;
using Elite_life_datacontext.Model;
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
    public class WarehouseRepository : IWarehouseRepos
    {
        private readonly IConfiguration _configuration;
        public WarehouseRepository(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public async Task<bool> AddWarehouseAsync(WarehouseModel model)
        {
            var query = @"SELECT dbo.insert_warehouse(@Name, @Location, @Capacity, @Mobile, @Manager, @ManagerMobile)";
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();
            try
            {
                using var command = new NpgsqlCommand(query, connection);
                command.Parameters.AddWithValue("Name", model.Name);
                command.Parameters.AddWithValue("Location", model.Location);
                command.Parameters.AddWithValue("Capacity", model.Capacity);
                command.Parameters.AddWithValue("Mobile", model.Mobile ?? (object)DBNull.Value);
                command.Parameters.AddWithValue("Manager", model.Manager ?? (object)DBNull.Value);
                command.Parameters.AddWithValue("ManagerMobile", model.ManagerMobile ?? (object)DBNull.Value);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error adding warehouse: {ex.Message}");
                return false;
            }
            finally
            {
                await connection.CloseAsync();
            }

            return false;
        }

        public async Task<bool> DeleteWarehouseAsync(int id)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();
            try
            {
                var query = @"SELECT dbo.delete_warehouse(@Id)";
                using var command = new NpgsqlCommand(query, connection);

                command.Parameters.AddWithValue("Id", id);

                return (bool)await command.ExecuteScalarAsync();
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error deleting warehouse: {ex.Message}");
                return false;
            }
            finally
            {
                await connection.CloseAsync();
            }
        }

        public async Task<List<WarehouseDto>> GetAllWarehousesAsync()
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();
            try
            {
                var query = @"SELECT * FROM dbo.get_all_warehouses()";
                var result = (await connection.QueryAsync<WarehouseDto>(query)).AsList();

                return result;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error fetching GetAllWarehousesAsync: {ex.Message}");
                return new List<WarehouseDto>();
            }
            finally
            {
                await connection.CloseAsync();
            }
        }

        public Task<WarehouseDto?> GetWarehouseByIdAsync(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<bool> UpdateWarehouseAsync(WarehouseModel model)
        {
            var query = @"SELECT dbo.update_warehouse(@Id, @Name, @Location, @Capacity, @Mobile, @Manager, @ManagerMobile)";
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();
            try
            {
                using var command = new NpgsqlCommand(query, connection);

                command.Parameters.AddWithValue("Id", model.Id);
                command.Parameters.AddWithValue("Name", model.Name);
                command.Parameters.AddWithValue("Location", model.Location);
                command.Parameters.AddWithValue("Capacity", model.Capacity);
                command.Parameters.AddWithValue("Mobile", model.Mobile ?? (object)DBNull.Value);
                command.Parameters.AddWithValue("Manager", model.Manager ?? (object)DBNull.Value);
                command.Parameters.AddWithValue("ManagerMobile", model.ManagerMobile ?? (object)DBNull.Value);

                return (bool)await command.ExecuteScalarAsync();
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error updating warehouse: {ex.Message}");
                return false;
            }
            finally
            {
                await connection.CloseAsync();
            }
        }
    }
}

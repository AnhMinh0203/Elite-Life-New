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
    public class BoothRepository : IBoothRepos
    {
        private readonly IConfiguration _configuration;
        public BoothRepository(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public async Task<bool> AddBoothAsync(BoothModel model)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();

            try
            {
                var query = @"SELECT dbo.add_booth(@title, @description, @contact, @image)";
                using var command = new NpgsqlCommand("SELECT dbo.add_booth(@title, @description, @contact, @image)", connection);
                command.Parameters.AddWithValue("title", model.Title);
                command.Parameters.AddWithValue("description", model.Description);
                command.Parameters.AddWithValue("contact", model.Contact);
                command.Parameters.AddWithValue("image", model.Image);

                var result = (bool)await command.ExecuteScalarAsync();
                if (result)
                {
                    return true;
                }
                return false;
            }
            catch (Exception ex)
            {
                return false;
            }
            finally
            {
                await connection.CloseAsync();
            }
        }

        public async Task<List<BoothDto>> GetBoothsAsync()
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();
            try
            {
                var query = @"SELECT * FROM dbo.get_booths()";

                var result = (await connection.QueryAsync<BoothDto>(query)).AsList();

                return result;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error fetching GetBoothsAsync: {ex.Message}");
                return new List<BoothDto>();
            }
            finally
            {
                await connection.CloseAsync();
            }
        }

        public async Task<bool> UpdateBoothAsync(BoothModel model)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();

            try
            {
                var query = @"SELECT dbo.update_booth(@id, @title, @description, @contact, @image)";
                using var command = new NpgsqlCommand(query, connection);
                command.Parameters.AddWithValue("id", model.Id);
                command.Parameters.AddWithValue("title", model.Title);
                command.Parameters.AddWithValue("description", model.Description);
                command.Parameters.AddWithValue("contact", model.Contact);
                command.Parameters.AddWithValue("image", model.Image);

                var result = (bool)await command.ExecuteScalarAsync();
                if (result)
                {
                    return true;
                }
                return false;
            }
            catch (Exception ex)
            {
                return false;
            }
            finally
            {
                await connection.CloseAsync();
            }
        }
    }
}

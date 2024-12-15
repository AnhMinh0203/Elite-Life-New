using Microsoft.Extensions.Configuration;
using Npgsql;
using System.Data;

namespace Elite_life_datacontext.DataBase
{
    public class ConnectToPostgresql
    {
        private readonly string _connectionString;

        public ConnectToPostgresql(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("PgDbConnection");
        }

        public IDbConnection CreateConnection() => new NpgsqlConnection(_connectionString);
    }
}

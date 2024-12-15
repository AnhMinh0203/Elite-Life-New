using Dapper;
using Elite_life_datacontext.DataBase;
using Elite_life_repository.Interfaces;
using Elite_life_datacontext.Dto;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Elite_life_repository
{
    public class AuthRepository: IAuthRepos
    {
/*        private readonly List<UserDto> _users = new List<UserDto>
        {
            new UserDto { Id = 1, UserName = "user1", Password = "password1" }
        };*/
        private readonly IConfiguration _configuration;
        public AuthRepository(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public UserDto Authenticate(string username, string password)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = connectPostgres.CreateConnection();
            connection.Open();
            var query = @"SELECT ""Id"", ""UserName"", ""Password"", ""RoleId"", ""DisplayName"", 
                         ""Email"", ""Mobile"", ""Address"", ""Permission"", ""ApplicationType""
                  FROM dbo.""Users""
                  LIMIT 10";

            var user = connection.QueryFirstOrDefault<UserDto>(query);

            //var user = _users.SingleOrDefault(x => x.UserName == username && x.Password == password);
            return user;
        }
    }
}

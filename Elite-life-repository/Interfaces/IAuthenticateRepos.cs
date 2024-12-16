using Elite_life_datacontext.Dto;
using Elite_life_datacontext.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Elite_life_repository.Interfaces
{
    public interface IAuthenticateRepos
    {
        //UserDto Authenticate(string username, string password);
        Task<CollaboratorDto> FindByUserNameAsync(string Username);
        bool CheckPasswordAsync(string password, string hashPassword);
        Task<bool> UpdateRefreshTokenAsync(int Id, string RefreshToken, DateTime RefreshTokenExpiryTime);
        Task<int> CreateUserAsync(RegisterModel model);
        Task<int> RegisterAdminAsync(RegisterModel model);
        Task<List<CollaboratorDto>> GetAllUsersAsync();
    }
}

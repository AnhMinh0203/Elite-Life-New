using Elite_life_datacontext.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Elite_life_repository.Interfaces
{
    public interface IProfileRepos
    {
        Task<ProfileModel> GetProfileAsync(string UserName);
        Task<List<string>> GetBanksAsync();
        Task<string> UpdateProfileContactInfoAsync(ProfileContactInfo profileContactInfo);
        Task<(bool IsMatch, string ErrorMessage)> CheckCurrentPassAsync(ProfilePasswordModel checkPasswordModel);
        Task<string> ChangePassAsync(ProfilePasswordModel changePasswordModel);
        Task<string> UpdateProfileAsync(ProfileUpdateModel profileUpdateModel);
    }
}

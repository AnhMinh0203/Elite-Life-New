using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Elite_life_datacontext.Model
{
    public class RegisterModel
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public string DisplayName { get; set; }
        public string Email { get; set; }
        public string Mobile { get; set; }
        public string Address { get; set; }
        public string Permission { get; set; }
        public string ApplicationType { get; set; }
        public string Identity { get; set; }
        public DateTime IdentityDate { get; set; }
        public string IdentityPlace { get; set; }
        public int ParentId { get; set; }
        public int BankId { get; set; }
        public string BankOwner { get; set; }
        public string BankNumber { get; set; }
        public string BankBranchName { get; set; }
    }
}

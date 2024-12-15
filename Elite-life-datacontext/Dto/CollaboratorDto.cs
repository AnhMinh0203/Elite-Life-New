using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Elite_life_datacontext.Dto
{
    public class CollaboratorDto
    {
        public int Id { get; set; }
        public string CreatedBy { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
        public DateTime? DeletedAt { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Mobile { get; set; }
        public string Address { get; set; }
        public string Identity { get; set; }
        public DateTime? IdentityDate { get; set; }
        public string IdentityPlace { get; set; }
        public DateTime? BeginDate { get; set; }
        public int? Level { get; set; }
        public string Rank { get; set; }
        public bool IsSale { get; set; }
        public int? ParentId { get; set; }
        public int? BankId { get; set; }
        public string BankBranchName { get; set; }
        public string BankOwner { get; set; }
        public string BankNumber { get; set; }
        public string Note { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string NameSale { get; set; }
        public string AddressSale { get; set; }
        public string MobileSale { get; set; }
    }
}

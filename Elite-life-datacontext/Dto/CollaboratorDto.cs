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
        public string RefreshToken { get; set; }
        public DateTime RefreshTokenExpiryTime { get; set; }
        public string Avatar { get; set; }
        public DateTime? AdminConfirm { get; set; }
        public DateTime? ChairpersonConfirm { get; set; }
        public DateTime? GeneralDirectorConfirm { get; set; }
        public string ApplicationType { get; set; }
        public int? RoleId { get; set; }
        public decimal GratitudeReceived { get; set; }
        public decimal ShareReceived { get; set; }
        public decimal Sale1Received { get; set; }
        public decimal Sale2Received { get; set; }
        public decimal MaxReceive { get; set; }
        public decimal? ExcessBalance { get; set; }
        public DateTime? SevenDayExpiration { get; set; }
        public DateTime? OneMonthExpiration { get; set; }
        public int RankStatus { get; set; }
        public int Star { get; set; }
    }
}

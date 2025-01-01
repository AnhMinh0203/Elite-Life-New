using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Elite_life_datacontext.Model
{
    public class WithdrawMoneyModel
    {
        public decimal Available { get; set; }
        public string BankNumber { get; set; }
        public string BankOwner { get; set; }
        public string BankName { get; set;}
    }

    public class WithdrawMoneyRange
    {
        public int CollaboratorId { get; set; }
        public string StartDate { get; set; } = string.Empty;
        public string EndDate { get; set; } = string.Empty;
    }

    public class WalletType
    {
        public int CollaboratorId { get; set; }
        public string Type { get; set; }
    }

    public class ClientsWallet
    {
        public string UserName { get; set; }
        public string DisplayName { get; set; }
    }

    public class WithdrawCommissionRequire
    {
        public int CollaboratorId { get; set; }
        public decimal SourceAmount{ get; set; }
        public decimal WalletCommissionAmount { get; set; }
        public decimal WithdrawAmount { get; set; }
        public string WalletType { get; set; }
    }

    public class TransferRequestModel
    {
        public int CollaboratorId { get; set; }
        public string UserNameReceive { get; set; }
        public decimal AmountReceive { get; set; }
    }
}

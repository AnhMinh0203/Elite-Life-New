using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Elite_life_datacontext.Model
{
    public class RequestWithdrawMoneyModel
    {
        public int CollaboratorId { get; set; }
        public string BankNumber { get; set; }
        public string BankOwner { get; set; }
        public string Bank { get; set; }
        public string BankBranchName { get; set; }
        public decimal WithdrawalAmount { get; set; }
        public string Status { get; set; }
        public decimal Tax { get; set; }
        public decimal ActualNumberReceived { get; set; }
    }
}

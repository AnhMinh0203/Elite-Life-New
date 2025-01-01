using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Elite_life_datacontext.Model
{
    public class WalletHistoryModel
    {
        public string Note { get; set; }
        public decimal Value { get; set; }
        public DateTime CreatedAt { get; set; }
        public string Status { get; set; }
    }

    public class CreateWalletHistory
    {
   
        public int CollaboratorId { get; set; }
        public string WalletType { get; set; }
        public decimal Value { get; set; }
        public string Note { get; set; }
    }
}

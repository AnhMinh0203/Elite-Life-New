using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Elite_life_datacontext.Dto
{
    public class WalletDetailCommissionDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string UserName { get; set; }
        public DateTime CreatedAt { get; set; }
        public Decimal Value { get; set; }
        public string Note { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Elite_life_datacontext.Model
{
    public class OrderHistoryModel
    {
        public DateTime CreatedAt { get; set; }
        public decimal Payed { get; set; }
        public decimal Amount { get; set; }
    }
}

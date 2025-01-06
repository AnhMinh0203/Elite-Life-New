using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Elite_life_datacontext.Model
{
    public class PlaceOrderModel
    {
        public int CollaboratorId { get; set; }
        public int ProductId { get; set; }
        public decimal Value { get; set; }
        public int Amount { get; set; }
        public decimal Payed {  get; set; } 
    }
}

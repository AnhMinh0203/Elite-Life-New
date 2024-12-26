using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Elite_life_datacontext.Dto
{
    public class OrderDto
    {
        public string CreatedBy { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
        public DateTime? DeletedAt { get; set; }
        public int Id { get; set; }
        public int? CollaboratorId { get; set; }
        public int? ProductId { get; set; }
        public decimal Value { get; set; } = 0;
        public decimal Pending { get; set; } = 0;
        public decimal Payed { get; set; } = 0;
        public DateTime? CompletedDate { get; set; }
        public bool IsProcess { get; set; } = false;
        public decimal CommissionExpected { get; set; } = 0;
        public decimal CommissionReal { get; set; } = 0;
        public decimal CommissionCustomerMax { get; set; } = 0;
        public decimal CommissionCustomer { get; set; } = 0;
        public decimal CommissionCustomerShare { get; set; } = 0;
        public decimal CommissionCustomerGratitude { get; set; } = 0;
        public decimal CommissionSaleMax { get; set; } = 0;
        public decimal CommissionSale { get; set; } = 0;
        public decimal CommissionSale1 { get; set; } = 0;
        public decimal CommissionSale2 { get; set; } = 0;
        public decimal CommissionSale3 { get; set; } = 0;
        public bool IsDelivered { get; set; } = false;
        public DateTime? DeliveryDate { get; set; }
        public string NameSale { get; set; }
        public string AddressSale { get; set; }
        public string MobileSale { get; set; }
    }
}

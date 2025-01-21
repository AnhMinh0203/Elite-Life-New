using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Elite_life_datacontext.Dto
{
    public class OrderInfoDto
    {
        public int OrderId { get; set; }
        public int CollaboratorId { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Mobile { get; set; }
        public DateTime? DeliveryDate { get; set; }
        public int TotalCount { get; set; }
        public string WarehouseName { get; set; }
        public string Note { get; set; }
    }
}

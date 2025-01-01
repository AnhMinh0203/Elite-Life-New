using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Elite_life_datacontext.Dto
{
    public class OrderDeliveryDateDto
    {
        public int Id { get; set; }
        public DateTime DeliveryDate { get; set; }
        public Boolean IsDeleted { get; set; }
    }
}

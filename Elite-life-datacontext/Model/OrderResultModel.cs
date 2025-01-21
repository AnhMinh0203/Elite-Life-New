using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Elite_life_datacontext.Model
{
    public class OrderResultModel
    {
        public string Message { get; set; }
        public int? OrderId { get; set; } 
    }

    public class OrderRange
    {
        public int CollaboratorId { get; set; }
        public string StartDate { get; set; } = string.Empty;
        public string EndDate { get; set; } = string.Empty;
    }

    public class OrderStatus
    {
        public int OrderId { get; set; }
        public string Status { get; set; }  
    }

    public class OrderNote
    {
        public int OrderId { get; set; }
        public string Note { get; set; }
    }

}

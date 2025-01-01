using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Elite_life_datacontext.Dto
{
    public class CollaboratorTopDto
    {
        public string Name { get; set; }
        public string UserName { get; set; }
        public DateTime CreatedAt { get; set; }
        public string? Rank { get; set; } = "None";
        public Decimal TotalCommission { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Elite_life_datacontext.Dto
{
    public class CollaboratorCustomerManagerDto : CollaboratorHomeDto
    {
        public string Email { get; set; }
        public string Mobile { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}

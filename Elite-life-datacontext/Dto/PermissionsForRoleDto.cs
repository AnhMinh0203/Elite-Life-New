using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Elite_life_datacontext.Dto
{
    public class PermissionsForRoleDto
    {
        public int permission_id { get; set; }
        public string permission_name { get; set; }
        public Boolean is_assigned { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Elite_life_datacontext.Dto
{
    public class RoleWithPermissionsDto
    {
        public int role_id_output { get; set; }
        public string role_name_output { get; set; } 
        public string permissions_list { get; set; }
    }

    public class RoleWithPermissionsDisplayDto
    {
        public int RoleId { get; set; }
        public string RoleName { get; set; }
        public List<string> Permissions { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Elite_life_datacontext.Model
{
    public class AddRoleWithPermissionsModel
    {
        public string RoleName { get; set; }
        public List<int> PermissionIds { get; set; }
    }

    public class UpdateRoleWithPermissionsModel
    {
        public int RoleId { get; set; }
        public string RoleName { get; set; }
        public List<int> PermissionIds { get; set; }
    }
}

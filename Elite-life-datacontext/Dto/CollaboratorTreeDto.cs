using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Elite_life_datacontext.Dto
{
    public class CollaboratorTreeDto
    {
        public int Id { get; set; }
        public int? ParentId { get; set; }
        public string UserName { get; set; }
        public string Path { get; set; }
    }
}

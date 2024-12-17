using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Elite_life_datacontext.Dto
{
    public class CollaboratorHomeDto
    {
        public int STT { get; set; }
        public string Name { get; set; }
        public string Rank { get; set; } = "None";
        public string UserName { get; set; }
    }
}

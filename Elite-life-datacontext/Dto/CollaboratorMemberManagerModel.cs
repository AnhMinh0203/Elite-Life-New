using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Elite_life_datacontext.Dto
{
    public class CollaboratorMemberManagerModel
    {
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
    }

    public class CollaboratorMemberManagerRankModel : CollaboratorMemberManagerModel
    {
        public int Type { get; set; }
    }
}

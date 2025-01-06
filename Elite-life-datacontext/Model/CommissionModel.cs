using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Elite_life_datacontext.Model
{
    public class CommissionModel
    {
        public int CollaboratorId { get; set; }
        public int AmountOrder { get; set; }
    }

    public class GratitudeCommissionModel: CommissionModel
    {
        public int OrderId { get; set; }
    }
}

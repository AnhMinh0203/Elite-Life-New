using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Elite_life_datacontext.Dto
{
    public class WalletsDto
    {
        public int Id { get; set; }
        public int CollaboratorId { get; set; }
        public string WalletTypeEnums { get; set; } 
        public Decimal Available { get; set; }
        public Decimal Pending { get; set; }
        public Decimal Total { get; set; }
        public string CreatedBy { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
        public DateTime? DeletedAt { get; set; }
    }
}

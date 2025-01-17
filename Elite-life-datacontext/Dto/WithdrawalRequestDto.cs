using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Elite_life_datacontext.Dto
{
    public class WithdrawalRequestDto
    {
        public int Id { get; set; }
        public string Code { get; set; }
        public int? CollaboratorId { get; set; }
        public string BankNumber { get; set; }
        public string BankOwner { get; set; }
        public string BankName { get; set; }
        public string BankBranchName { get; set; }
        public decimal TotalAmount { get; set; }
        public decimal WithdrawalAmount { get; set; }
        public string Note { get; set; }
        public string Status { get; set; }
        public string NoteRejection { get; set; }
        public string Image { get; set; }
        public decimal Tax { get; set; }
        public decimal ActualNumberReceived { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}

namespace Elite_life_datacontext.Model
{
    public class AccountCreateModel
    {
        public string Name { get; set; }
        public string UserName { get; set; }
        public string Identity { get; set; }
        public string BankNumber { get; set; }
        public string Bank { get; set; }
        public DateTime? IdentityDate { get; set; }
        public string BankBranchName { get; set; }
        public string IdentityPlace { get; set; }
        public string BankOwner { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}

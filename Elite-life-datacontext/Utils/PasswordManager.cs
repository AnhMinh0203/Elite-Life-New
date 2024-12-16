using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace Elite_life_datacontext.Utils
{
    public class PasswordManager
    {
        private readonly IConfiguration _configuration;

        public PasswordManager(IConfiguration configuration) => _configuration = configuration;
        public string HashPassword(string password, string salt)
        {
            using (var hmac = new HMACSHA512(Encoding.UTF8.GetBytes(salt)))
            {
                byte[] passwordBytes = Encoding.UTF8.GetBytes(password);
                byte[] hashedBytes = hmac.ComputeHash(passwordBytes);
                return Convert.ToBase64String(hashedBytes);
            }
        }

        public string GenerateSalt()
        {
            string salt = _configuration["Jwt:Secret"];

            if (string.IsNullOrEmpty(salt))
            {
                salt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzAnhHieuDepTrai442350123456789";
            }

            return salt;
        }
    }
}

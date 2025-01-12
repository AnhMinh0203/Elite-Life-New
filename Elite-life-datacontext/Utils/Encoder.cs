using System.Security.Cryptography;
using System.Text;

namespace Elite_life_datacontext.Utils
{
    public static class Encoder
    {
        public static string AsHmacSHA512(string key, string inputData)
        {
            var keyBytes = Encoding.UTF8.GetBytes(key);
            var inputBytes = Encoding.UTF8.GetBytes(inputData);

            using var hmac = new HMACSHA512(keyBytes);
            return BitConverter.ToString(hmac.ComputeHash(inputBytes)).Replace("-", string.Empty);
        }
    }
}

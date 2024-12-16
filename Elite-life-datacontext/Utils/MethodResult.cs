using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Elite_life_datacontext.Utils
{
    public class MethodResult
    {
        #region declare property
        public int? StatusCode { get; set; } = 200;
        public string Message { get; set; } = "";
        public object Data { get; set; } = new object();
        #endregion

        public MethodResult()
        {

        }

        public static MethodResult ResultWithError(string message = "")
        {
            return new MethodResult
            {
                Message = message
            };
        }

        public static MethodResult ResultWithError(object? Data = null, int? status = null, string message = "")
        {
            return new MethodResult
            {
                Data = Data,
                Message = message,
                StatusCode = status
            };
        }
        public static MethodResult ResultWithSuccess(object? Data = null, int? status = 200, string message = "")
        {
            return new MethodResult
            {
                Data = Data,
                Message = message,
                StatusCode = status
            };
        }

        public static MethodResult ResultWithAuthorized(object? Data = null, int? status = null, string message = "")
        {
            return new MethodResult
            {
                Data = Data,
                Message = message,
                StatusCode = status
            };
        }
    }
}

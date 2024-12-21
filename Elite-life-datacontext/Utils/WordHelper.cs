using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xceed.Words.NET;

namespace Elite_life_datacontext.Utils
{
    public class WordHelper
    {
        public static void FillTemplate(string templatePath, string outputPath, Dictionary<string, string> placeholders)
        {
            // Mở file template Word
            using (var document = DocX.Load(templatePath))
            {
                // Thay thế các placeholder bằng dữ liệu thực tế
                foreach (var placeholder in placeholders)
                {
                    document.ReplaceText(placeholder.Key, placeholder.Value);
                }

                // Lưu file Word đã điền dữ liệu
                document.SaveAs(outputPath);
            }
        }
    }
}

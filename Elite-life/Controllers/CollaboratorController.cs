using ConvertApiDotNet;
using Elite_life_datacontext.Dto;
using Elite_life_datacontext.Model;
using Elite_life_datacontext.Utils;
using Elite_life_repository.Common;
using Elite_life_repository.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing.Template;
using Microsoft.Extensions.Configuration;
using System.Reflection;
using System.Text.RegularExpressions;

namespace Elite_life.Controllers
{
    //[Authorize]
    [ApiController]
    [Route("[controller]")]
    public class CollaboratorController : ControllerBase
    {
        private readonly ICollaboratorRepos _collaboratorRepos;
        private readonly IConfiguration _configuration;
        public CollaboratorController(ICollaboratorRepos collaboratorRepos, IConfiguration configuration)
        {
            _collaboratorRepos = collaboratorRepos;
            _configuration = configuration;
        }

        [HttpGet]
        [Route("get-collaborator-by-parentId")]
        public async Task<MethodResult> GetCollaboratorsByParendId(int CollaboratorId)
        {
            var result = await _collaboratorRepos.GetCollaboratorsByParendId(CollaboratorId);
            if (result != null)
            {
                return MethodResult.ResultWithSuccess(result, 200, "Success");

            }
            return MethodResult.ResultWithError(null, 400, "Not Found");
        }

        [HttpGet]
        [Route("export-excel-collaborator-by-parentId")]
        public async Task<IActionResult> ExportExcelCollaboratorsByParendId(int CollaboratorId)
        {

            var toDay = DateTime.Today;

            var result = await _collaboratorRepos.ExportExcelCollaboratorsByParendId(CollaboratorId);
            string templateFileURL = Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), "wwwroot", "template", "Export_Collaborator_Home.xlsx"); ;
            string fileName = $"{ExtensionFile.GetFileNameWithoutExtension(templateFileURL)}_{toDay.ToString().Replace('/', '_').Replace(':', '_').Replace(' ', '_')}.xlsx";

            Response.Headers.Add("fileName", fileName);
            return File(result.ToArray(), ExtensionFile.GetContentType(templateFileURL), fileName);
        }

        [HttpPost]
        [Route("get-all-collaborator-by-parentId")]
        public async Task<MethodResult> GetAllCollaboratorsByParendId(CollaboratorCustomerManagerModel model)
        {
            var result = await _collaboratorRepos.GetAllCollaboratorsByParendId(model);
            if (result != null)
            {
                return MethodResult.ResultWithSuccess(result, 200, "Success");

            }
            return MethodResult.ResultWithError(null, 400, "Not Found");
        }

        [HttpPost]
        [Route("export-excel-all-collaborator-by-parentId")]
        public async Task<IActionResult> ExportExcelAllCollaboratorsByParendId(CollaboratorCustomerManagerModel model)
        {

            var toDay = DateTime.Today;

            var result = await _collaboratorRepos.ExportExcelAllCollaboratorsByParendId(model);
            string templateFileURL = Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), "wwwroot", "template", "Export_Collaborator_CustomerManager.xlsx");
            string fileName = $"{ExtensionFile.GetFileNameWithoutExtension(templateFileURL)}_{toDay.ToString().Replace('/', '_').Replace(':', '_').Replace(' ', '_')}.xlsx";

            Response.Headers.Add("fileName", fileName);
            return File(result.ToArray(), ExtensionFile.GetContentType(templateFileURL), fileName);
        }

        [HttpGet]
        [Route("get-collaborator-system-manager")]
        public async Task<MethodResult> GetCollaboratorsSystemManager(int CollaboratorId)
        {
            var result = await _collaboratorRepos.GetCollaboratorsSystemManager(CollaboratorId);
            if (result != null)
            {
                return MethodResult.ResultWithSuccess(result, 200, "Success");

            }
            return MethodResult.ResultWithError(null, 400, "Not Found");
        }

        [HttpGet]
        [Route("get-total-value-with-level")]
        public async Task<MethodResult> GetTotalValueWithLevelAsync(int inputId)
        {
            var result = await _collaboratorRepos.GetTotalValueWithLevelAsync(inputId);
            if (result != null)
            {
                return MethodResult.ResultWithSuccess(result, 200, "Success");

            }
            return MethodResult.ResultWithError(null, 400, "Not Found");
        }

        [HttpGet]
        [Route("get-collaborator-contract-manager")]
        public async Task<MethodResult> GetCollaboratorsContractManager(int CollaboratorId)
        {
            try
            {
                // Lấy thông tin từ repository
                var collaborator = await _collaboratorRepos.GetCollaboratorsContractManager(CollaboratorId);

                if (collaborator == null)
                {
                    return MethodResult.ResultWithError(null, 400, "Collaborator not found");
                }

                // Đường dẫn file template và file đầu ra
                string baseDir = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);
                string baseDirData = _configuration.GetValue("dataUrl", "E:\\Customers\\Elite-Life-New\\Client\\src\\assets");
                string templateFilePath = Path.Combine(baseDir, "wwwroot", "template", "contractTemp.docx");
                string contractsDir = Path.Combine(baseDirData, "ContractsFile");
                string imageSignDir = Path.Combine(baseDirData, "ImageSign");

                string imageSignName = $"EL{CollaboratorId}.png";
                string contractFileName = $"contract_EL{CollaboratorId}.docx";
                string pdfFileName = $"contract_EL{CollaboratorId}.pdf";

                string contractFilePath = Path.Combine(contractsDir, contractFileName);
                string pdfFilePath = Path.Combine(contractsDir, pdfFileName);
                string imageSignPath = Path.Combine(imageSignDir, imageSignName);

                // Kiểm tra file PDF đã tồn tại chưa
                if (System.IO.File.Exists(pdfFilePath))
                {
                    string imageSignExists = System.IO.File.Exists(imageSignPath) ? imageSignPath : null;
                    return MethodResult.ResultWithSuccess(new
                    {
                        ContractUrl = pdfFilePath,
                        Data = collaborator,
                        ImageSignUrl = imageSignExists
                    }, 200, "Contract already exists");
                }

                // Kiểm tra sự tồn tại của file template
                if (!System.IO.File.Exists(templateFilePath))
                {
                    return MethodResult.ResultWithError(null, 500, "Template file not found");
                }

                // Tạo thư mục đầu ra nếu chưa tồn tại
                if (!Directory.Exists(contractsDir))
                {
                    Directory.CreateDirectory(contractsDir);
                }

                // Chuẩn bị dữ liệu điền vào template
                var data = new Dictionary<string, string>
                {
                    { "{UserName}", collaborator.UserName ?? "N/A" },
                    { "{Day}", collaborator.BeginDate?.Day.ToString() ?? "N/A" },
                    { "{Month}", collaborator.BeginDate?.Month.ToString() ?? "N/A" },
                    { "{Year}", collaborator.BeginDate?.Year.ToString() ?? "N/A" },
                    { "{Name}", collaborator.Name ?? "N/A" },
                    { "{Identity}", collaborator.Identity ?? "N/A" },
                    { "{IdentityDate}", collaborator.IdentityDate?.ToString("dd/MM/yyyy") ?? "N/A" },
                    { "{IdentityPlace}", collaborator.IdentityPlace ?? "N/A" },
                    { "{Address}", collaborator.Address ?? "N/A" },
                };

                // Điền dữ liệu vào file Word
                WordHelper.FillTemplate(templateFilePath, contractFilePath, data);

                // Chuyển đổi file Word thành PDF
                var convertApi = new ConvertApi("secret_53xbDnSOIe9X8Vdl");
                var conversionResult = await convertApi.ConvertAsync("docx", "pdf",
                    new ConvertApiFileParam("File", contractFilePath)
                );

                await conversionResult.SaveFilesAsync(contractsDir);

                string finalImageSignExists = System.IO.File.Exists(imageSignPath) ? imageSignPath : null;

                // Trả kết quả thành công với đường dẫn file đầu ra
                return MethodResult.ResultWithSuccess(new
                {
                    ContractUrl = pdfFilePath,
                    Data = collaborator,
                    ImageSignUrl = finalImageSignExists
                }, 200, "Contract created successfully");
            }
            catch (Exception ex)
            {
                // Ghi log lỗi (nếu có hệ thống log)
                //_logger.LogError(ex, "Error generating collaborator contract");

                // Trả lỗi chung
                return MethodResult.ResultWithError(null, 500, "An error occurred while generating the contract");
            }
        }

        [HttpPost("save-signature")]
        public MethodResult SaveSignature([FromBody] SignatureDto signatureDto)
        {
            try
            {
                string baseDir = _configuration.GetValue("dataUrl", "E:\\Customers\\Elite-Life-New\\Client\\src\\assets");
                if (string.IsNullOrWhiteSpace(signatureDto.ImageData))
                {
                    return MethodResult.ResultWithError(null, 400, "Image data is required.");
                }

                // Loại bỏ prefix "data:image/png;base64," nếu có
                var base64Data = Regex.Replace(signatureDto.ImageData, "^data:image\\/[^;]+;base64,", "");

                // Chuyển đổi từ Base64 thành byte[]
                byte[] imageBytes = Convert.FromBase64String(base64Data);

                // Đường dẫn lưu tệp (có thể điều chỉnh theo nhu cầu)
                string folderPath = Path.Combine(baseDir, "ImageSign");
                //string folderPath = Path.Combine(baseDir, "ImageSign");

                if (!Directory.Exists(folderPath))
                {
                    Directory.CreateDirectory(folderPath);
                }

                // Tạo tên tệp duy nhất
                string fileName = $"EL{signatureDto.CollaboratorId}.png";
                string filePath = Path.Combine(folderPath, fileName);

                // Lưu tệp ảnh vào ổ đĩa
                System.IO.File.WriteAllBytes(filePath, imageBytes);

                return MethodResult.ResultWithSuccess(new
                {
                    FilePath = filePath
                }, 200, "Signature saved successfully.");
            }
            catch (FormatException ex)
            {
                return MethodResult.ResultWithError(null, 400, $"Invalid Base64 string format: {ex.Message}");
            }
            catch (Exception ex)
            {
                return MethodResult.ResultWithError(null, 400, $"An error occurred while saving the signature: {ex.Message}");
            }
        }
    }
}

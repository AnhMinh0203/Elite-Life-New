using Elite_life_datacontext.Dto;
using Elite_life_datacontext.Model;
using Elite_life_datacontext.Utils;
using Elite_life_repository.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Elite_life.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BoothController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IBoothRepos _boothRepos;
        public BoothController(IConfiguration configuration, IBoothRepos boothRepos)
        {
            _configuration = configuration;
            _boothRepos = boothRepos;
        }

        [HttpPost("upload-image")]
        public async Task<MethodResult> UploadImage(IFormFile file)
        {
            try
            {
                if (file == null || file.Length == 0)
                {
                    return MethodResult.ResultWithError("No file was provided");
                }

                string baseDirData = _configuration.GetValue("dataUrl", "E:\\Customers\\Elite-Life-New\\File");
                string imageDir = Path.Combine(baseDirData, "Booth");

                if (!Directory.Exists(imageDir))
                {
                    Directory.CreateDirectory(imageDir);
                }

                //string newFileName = "image_main.png";
                string filePath = Path.Combine(imageDir, file.FileName);

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await file.CopyToAsync(stream);
                }

                return MethodResult.ResultWithSuccess(file.FileName, 200, "File upload successfully");
            }
            catch (Exception ex)
            {
                return MethodResult.ResultWithError("An error occurred while uploading the file: " + ex.Message);
            }
        }

        [HttpDelete("delete-image/{fileName}")]
        public async Task<MethodResult> DeleteImage(string fileName)
        {
            try
            {
                if (string.IsNullOrEmpty(fileName))
                {
                    return MethodResult.ResultWithError("No file name was provided");
                }

                string baseDirData = _configuration.GetValue("dataUrl", "E:\\Customers\\Elite-Life-New\\File");
                string imageDir = Path.Combine(baseDirData, "Booth");

                string filePath = Path.Combine(imageDir, fileName);

                if (!System.IO.File.Exists(filePath))
                {
                    return MethodResult.ResultWithError("File does not exist");
                }

                // Xóa file
                System.IO.File.Delete(filePath);

                return MethodResult.ResultWithSuccess(fileName, 200, "File deleted successfully");
            }
            catch (Exception ex)
            {
                return MethodResult.ResultWithError("An error occurred while deleting the file: " + ex.Message);
            }
        }


        [HttpGet]
        [Route("get/{fileName}")]
        public IActionResult GetImage(string fileName)
        {
            try
            {
                string baseDirData = _configuration.GetValue("dataUrl", "E:\\Customers\\Elite-Life-New\\File");
                string filePath = Path.Combine(baseDirData, "Booth", fileName);

                // Kiểm tra file ảnh có tồn tại không
                if (!System.IO.File.Exists(filePath))
                {
                    return NotFound(new { message = "Image not found" });
                }

                var fileBytes = System.IO.File.ReadAllBytes(filePath);
                return File(fileBytes, "image/jpeg", fileName);
            }
            catch (Exception ex)
            {
                //_logger.LogError(ex, "Error retrieving contract image");
                return StatusCode(500, new { message = "An error occurred while retrieving the image" });
            }
        }

        [HttpPost]
        [Route("add-booth")]
        public async Task<MethodResult> AddBooth(BoothModel model)
        {
            var result = await _boothRepos.AddBoothAsync(model);
            if (result)
            {
                return MethodResult.ResultWithSuccess(result, 200, "Success");

            }
            return MethodResult.ResultWithError(null, 400, "Not Found");
        }

        [HttpGet]
        [Route("get-booths")]
        public async Task<MethodResult> GetBooths()
        {
            var result = await _boothRepos.GetBoothsAsync();
            if (result != null)
            {
                return MethodResult.ResultWithSuccess(result, 200, "Success");

            }
            return MethodResult.ResultWithError(null, 400, "Not Found");
        }

        [HttpPost]
        [Route("update-booth")]
        public async Task<MethodResult> UpdateBooth(BoothModel model)
        {
            var result = await _boothRepos.UpdateBoothAsync(model);
            if (result)
            {
                return MethodResult.ResultWithSuccess(result, 200, "Success");

            }
            return MethodResult.ResultWithError(null, 400, "Not Found");
        }
    }
}

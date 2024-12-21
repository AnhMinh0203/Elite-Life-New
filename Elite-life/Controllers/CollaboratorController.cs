using Elite_life_datacontext.Model;
using Elite_life_datacontext.Utils;
using Elite_life_repository.Common;
using Elite_life_repository.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Reflection;

namespace Elite_life.Controllers
{
    //[Authorize]
    [ApiController]
    [Route("[controller]")]
    public class CollaboratorController : ControllerBase
    {
        private readonly ICollaboratorRepos _collaboratorRepos;
        public CollaboratorController(ICollaboratorRepos collaboratorRepos)
        {
            _collaboratorRepos = collaboratorRepos;
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
            string templateFileURL = Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), "wwwroot", "template", "Export_Collaborator_CustomerManager.xlsx"); ;
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
    }
}

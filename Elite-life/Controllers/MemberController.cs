using Elite_life_datacontext.Utils;
using Elite_life_repository.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Elite_life.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class MemberController: ControllerBase
    {
        private readonly IMemberManagerRepons _memberManagerRepons;
        private readonly IConfiguration _configuration;
        public MemberController(IMemberManagerRepons memberManagerRepons, IConfiguration configuration)
        {
            _memberManagerRepons = memberManagerRepons;
            _configuration = configuration;
        }

        [HttpGet]
        [Route("Member-GetAll")]
        public async Task<MethodResult> GetAllMembers()
        {
            var result = await _memberManagerRepons.GetAllMembersAsync();
            if (result != null || result.Any())
            {
                return MethodResult.ResultWithSuccess(result, 200, "Success");

            }
            return MethodResult.ResultWithError(null, 400, "Not Found");
        }
    }
}

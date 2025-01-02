using Elite_life_datacontext.Model;
using Elite_life_datacontext.Utils;
using Elite_life_repository.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Elite_life.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class WarehouseController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWarehouseRepos _warehouseRepos;
        public WarehouseController(IConfiguration configuration, IWarehouseRepos warehouseRepos)
        {
            _configuration = configuration;
            _warehouseRepos = warehouseRepos;
        }

        [HttpPost("add-warehouse")]
        public async Task<MethodResult> AddWarehouse(WarehouseModel model)
        {
            try
            {
                if (model == null)
                {
                    return MethodResult.ResultWithError("No warehouse was provided");
                }

                var result = await _warehouseRepos.AddWarehouseAsync(model);
                if (result)
                {
                    return MethodResult.ResultWithSuccess(null, 200, "Warehouse added successfully");
                }
                return MethodResult.ResultWithError(null, 400, "Failed to add warehouse");
            }
            catch (Exception ex)
            {
                return MethodResult.ResultWithError("An error occurred while adding the warehouse: " + ex.Message);
            }
        }

        [HttpDelete("delete-warehouse/{id}")]
        public async Task<MethodResult> DeleteWarehouse(int id)
        {
            try
            {
                if (id == 0)
                {
                    return MethodResult.ResultWithError("No warehouse id was provided");
                }

                var result = await _warehouseRepos.DeleteWarehouseAsync(id);
                if (result)
                {
                    return MethodResult.ResultWithSuccess(null, 200, "Warehouse deleted successfully");
                }
                return MethodResult.ResultWithError(null, 400, "Failed to delete warehouse");
            }
            catch (Exception ex)
            {
                return MethodResult.ResultWithError("An error occurred while deleting the warehouse: " + ex.Message);
            }
        }

        [HttpGet("get-warehouse")]
        public async Task<MethodResult> GetWarehouse()
        {
            try
            {
                var result = await _warehouseRepos.GetAllWarehousesAsync();
                if (result != null)
                {
                    return MethodResult.ResultWithSuccess(result, 200, "Success");
                }
                return MethodResult.ResultWithError(null, 400, "No warehouse found");
            }
            catch (Exception ex)
            {
                return MethodResult.ResultWithError("An error occurred while fetching the warehouse: " + ex.Message);
            }
        }

        [HttpPut("update-warehouse")]
        public async Task<MethodResult> UpdateWarehouse(WarehouseModel model)
        {
            try
            {
                if (model == null)
                {
                    return MethodResult.ResultWithError("No warehouse was provided");
                }

                var result = await _warehouseRepos.UpdateWarehouseAsync(model);
                if (result)
                {
                    return MethodResult.ResultWithSuccess(null, 200, "Warehouse updated successfully");
                }
                return MethodResult.ResultWithError(null, 400, "Failed to update warehouse");
            }
            catch (Exception ex)
            {
                return MethodResult.ResultWithError("An error occurred while updating the warehouse: " + ex.Message);
            }
        }
    }
}

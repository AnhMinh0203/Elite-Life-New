using Elite_life_datacontext.Dto;
using Elite_life_datacontext.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Elite_life_repository.Interfaces
{
    public interface IWarehouseRepos
    {
        Task<bool> AddWarehouseAsync(WarehouseModel model);
        Task<bool> UpdateWarehouseAsync(WarehouseModel model);
        Task<bool> DeleteWarehouseAsync(int id);
        Task<List<WarehouseDto>> GetAllWarehousesAsync();
        Task<MemoryStream> ExportExcelAllWarehousesAsync();
        Task<List<WarehouseDto>> SearchWarehousesAsync(string key);
        Task<WarehouseDto?> GetWarehouseByIdAsync(int id);
    }
}

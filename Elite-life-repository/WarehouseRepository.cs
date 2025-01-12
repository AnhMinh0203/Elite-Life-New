using Dapper;
using Elite_life_datacontext.DataBase;
using Elite_life_datacontext.Dto;
using Elite_life_datacontext.Model;
using Elite_life_repository.Interfaces;
using Microsoft.Extensions.Configuration;
using Npgsql;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Elite_life_repository
{
    public class WarehouseRepository : IWarehouseRepos
    {
        private readonly IConfiguration _configuration;
        public WarehouseRepository(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public async Task<bool> AddWarehouseAsync(WarehouseModel model)
        {
            var query = @"SELECT dbo.insert_warehouse(@Name, @Location, @Capacity, @Mobile, @Manager, @ManagerMobile)";
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();
            try
            {
                using var command = new NpgsqlCommand(query, connection);
                command.Parameters.AddWithValue("Name", model.Name);
                command.Parameters.AddWithValue("Location", model.Location);
                command.Parameters.AddWithValue("Capacity", model.Capacity);
                command.Parameters.AddWithValue("Mobile", model.Mobile ?? (object)DBNull.Value);
                command.Parameters.AddWithValue("Manager", model.Manager ?? (object)DBNull.Value);
                command.Parameters.AddWithValue("ManagerMobile", model.ManagerMobile ?? (object)DBNull.Value);

                return (bool)await command.ExecuteScalarAsync();
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error adding warehouse: {ex.Message}");
                return false;
            }
            finally
            {
                await connection.CloseAsync();
            }
        }

        public async Task<bool> DeleteWarehouseAsync(int id)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();
            try
            {
                var query = @"SELECT dbo.delete_warehouse(@Id)";
                using var command = new NpgsqlCommand(query, connection);

                command.Parameters.AddWithValue("Id", id);

                return (bool)await command.ExecuteScalarAsync();
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error deleting warehouse: {ex.Message}");
                return false;
            }
            finally
            {
                await connection.CloseAsync();
            }
        }

        public async Task<DataTable> ExportExcelAllWarehousesAsyncDatatable()
        {
            DataTable dataTable = new DataTable();
            dataTable.Columns.Add("Name", typeof(string));
            dataTable.Columns.Add("Location", typeof(string));
            dataTable.Columns.Add("Capacity", typeof(int));
            dataTable.Columns.Add("Mobile", typeof(string));
            dataTable.Columns.Add("Manager", typeof(string));
            dataTable.Columns.Add("ManagerMobile", typeof(string));

            var connectPostgres = new ConnectToPostgresql(_configuration);

            using (var conn = await connectPostgres.CreateConnectionAsync())
            {
                using (var command = new NpgsqlCommand("SELECT * FROM dbo.get_all_warehouses()", conn))
                {
                    command.CommandTimeout = 400;

                    using (var adapter = new NpgsqlDataAdapter(command))
                    {
                        adapter.Fill(dataTable);
                    }
                }

                await conn.CloseAsync();
            }
            if (dataTable.Columns.Contains("Id"))
            {
                dataTable.Columns.Remove("Id");
            }
            if (dataTable.Columns.Contains("CreatedAt"))
            {
                dataTable.Columns.Remove("CreatedAt");
            }
            if (dataTable.Columns.Contains("UpdatedAt"))
            {
                dataTable.Columns.Remove("UpdatedAt");
            }
            return dataTable;
        }

        public async Task<MemoryStream> ExportExcelAllWarehousesAsync()
        {
            var exportFile = new MemoryStream();

            #region Call data API
            var collaborators = await ExportExcelAllWarehousesAsyncDatatable();
            #endregion

            #region Export Excel from template
            // Đường dẫn tới file template
            string templatePath = Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), "wwwroot", "template", "Export_Warehouse.xlsx");

            // Đọc file template Excel
            var fileInfo = new FileInfo(templatePath);
            using (var package = new OfficeOpenXml.ExcelPackage(fileInfo))
            {
                // Lấy worksheet đầu tiên
                var worksheet = package.Workbook.Worksheets[0];
                worksheet.Cells["A4"].LoadFromDataTable(collaborators, false);

                // Tự động điều chỉnh kích thước cột
                worksheet.Cells[worksheet.Dimension.Address].AutoFitColumns();

                if (collaborators.Rows.Count > 0)
                {
                    var range = worksheet.Cells["A4:F" + (collaborators.Rows.Count + 6).ToString()];
                    foreach (var cell in range)
                    {
                        var border = cell.Style.Border;
                        border.Top.Style = OfficeOpenXml.Style.ExcelBorderStyle.Thin;
                        border.Bottom.Style = OfficeOpenXml.Style.ExcelBorderStyle.Thin;
                        border.Left.Style = OfficeOpenXml.Style.ExcelBorderStyle.Thin;
                        border.Right.Style = OfficeOpenXml.Style.ExcelBorderStyle.Thin;
                    }
                }

                // Lưu lại file Excel vào MemoryStream
                package.SaveAs(exportFile);
            }

            exportFile.Position = 0;
            return exportFile;
            #endregion
        }

        public async Task<List<WarehouseDto>> GetAllWarehousesAsync()
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();
            try
            {
                var query = @"SELECT * FROM dbo.get_all_warehouses()";
                var result = (await connection.QueryAsync<WarehouseDto>(query)).AsList();

                return result;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error fetching GetAllWarehousesAsync: {ex.Message}");
                return new List<WarehouseDto>();
            }
            finally
            {
                await connection.CloseAsync();
            }
        }

        public Task<WarehouseDto?> GetWarehouseByIdAsync(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<List<WarehouseDto>> SearchWarehousesAsync(string key)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();
            try
            {
                var query = @"SELECT * FROM dbo.search_warehouses(@search)";
                var parameters = new { search = key };
                var result = (await connection.QueryAsync<WarehouseDto>(query, parameters)).AsList();

                return result;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error fetching GetAllWarehousesAsync: {ex.Message}");
                return new List<WarehouseDto>();
            }
            finally
            {
                await connection.CloseAsync();
            }
        }

        public async Task<bool> UpdateWarehouseAsync(WarehouseModel model)
        {
            var query = @"SELECT dbo.update_warehouse(@Id, @Name, @Location, @Capacity, @Mobile, @Manager, @ManagerMobile)";
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();
            try
            {
                using var command = new NpgsqlCommand(query, connection);

                command.Parameters.AddWithValue("Id", model.Id);
                command.Parameters.AddWithValue("Name", model.Name);
                command.Parameters.AddWithValue("Location", model.Location);
                command.Parameters.AddWithValue("Capacity", model.Capacity);
                command.Parameters.AddWithValue("Mobile", model.Mobile ?? (object)DBNull.Value);
                command.Parameters.AddWithValue("Manager", model.Manager ?? (object)DBNull.Value);
                command.Parameters.AddWithValue("ManagerMobile", model.ManagerMobile ?? (object)DBNull.Value);

                return (bool)await command.ExecuteScalarAsync();
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error updating warehouse: {ex.Message}");
                return false;
            }
            finally
            {
                await connection.CloseAsync();
            }
        }
    }
}

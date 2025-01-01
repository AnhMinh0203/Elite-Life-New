using Dapper;
using Elite_life_datacontext.DataBase;
using Elite_life_datacontext.Dto;
using Elite_life_datacontext.Model;
using Elite_life_datacontext.Utils;
using Elite_life_repository.Interfaces;
using IdentityModel.Client;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using Npgsql;
using OfficeOpenXml.Style;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Elite_life_repository
{
    public class CollaboratorRepository : ICollaboratorRepos
    {
        private readonly IConfiguration _configuration;
        public CollaboratorRepository(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public async Task<DataTable> ExportExcelCollaboratorsByParendIdDataTable(int CollaboratorId)
        {
            DataTable dataTable = new DataTable();

            var connectPostgres = new ConnectToPostgresql(_configuration);

            using (var conn = await connectPostgres.CreateConnectionAsync())
            {
                using (var command = new NpgsqlCommand("SELECT * FROM dbo.Get_Collaborators_By_ParentId(@inputParentId)", conn))
                {
                    command.Parameters.AddWithValue("@inputParentId", CollaboratorId);
                    command.CommandTimeout = 400;

                    using (var adapter = new NpgsqlDataAdapter(command))
                    {
                        adapter.Fill(dataTable);
                    }
                }

                await conn.CloseAsync();
            }

            return dataTable;
        }

        public async Task<MemoryStream> ExportExcelCollaboratorsByParendId(int CollaboratorId)
        {
            var exportFile = new MemoryStream();

            #region Call data API
            var collaborators = await ExportExcelCollaboratorsByParendIdDataTable(CollaboratorId);
            #endregion

            #region Export Excel from template
            // Đường dẫn tới file template
            string templatePath = Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), "wwwroot", "template", "Export_Collaborator_Home.xlsx");

            // Đọc file template Excel
            var fileInfo = new FileInfo(templatePath);
            using (var package = new OfficeOpenXml.ExcelPackage(fileInfo))
            {
                // Lấy worksheet đầu tiên
                var worksheet = package.Workbook.Worksheets[0];
                string reportTitle = $"BẢNG THÀNH VIÊN CỦA CTV ID: EL{CollaboratorId}";
                worksheet.Cells["A1"].Value = reportTitle;
                worksheet.Cells["A1:D1"].Merge = true; // Hợp nhất các ô
                worksheet.Cells["A1"].Style.HorizontalAlignment = ExcelHorizontalAlignment.Center; // Căn giữa ngang
                worksheet.Cells["A1"].Style.VerticalAlignment = ExcelVerticalAlignment.Center; // Căn giữa dọc
                worksheet.Cells["A1"].Style.Font.Size = 14; // Kích thước font chữ
                worksheet.Cells["A1"].Style.Font.Bold = true;
                worksheet.Cells["A4"].LoadFromDataTable(collaborators, false);

                // Tự động điều chỉnh kích thước cột
                worksheet.Cells[worksheet.Dimension.Address].AutoFitColumns();

                if (collaborators.Rows.Count > 0)
                {
                    var range = worksheet.Cells["A4:D" + (collaborators.Rows.Count + 6).ToString()];
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

        public async Task<List<CollaboratorHomeDto>> GetCollaboratorsByParendId(int CollaboratorId)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();

            try
            {
                var query = @"SELECT * FROM dbo.Get_Collaborators_By_ParentId(@inputParentId)";

                var parameters = new
                {
                    inputParentId = CollaboratorId
                };

                var result = (await connection.QueryAsync<CollaboratorHomeDto>(query, parameters)).AsList();
                return result;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error fetching Collaborator: {ex.Message}");
                return new List<CollaboratorHomeDto>();
            }
            finally
            {
                await connection.CloseAsync();
            }
        }

        public async Task<List<CollaboratorCustomerManagerDto>> GetAllCollaboratorsByParendId(CollaboratorCustomerManagerModel model)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();

            try
            {
                var query = @"SELECT * FROM dbo.get_all_collaborators_descendants(@p_parent_id, @p_start_date, @p_end_date)";

                var parameters = new
                {
                    p_parent_id = model.Id,
                    p_start_date = model.StartDate,
                    p_end_date = model.EndDate,
                };

                var result = (await connection.QueryAsync<CollaboratorCustomerManagerDto>(query, parameters)).AsList();
                return result;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error fetching GetAllCollaboratorsByParendId: {ex.Message}");
                return new List<CollaboratorCustomerManagerDto>();
            }
            finally
            {
                await connection.CloseAsync();
            }
        }

        public async Task<DataTable> ExportExcelAllCollaboratorsByParendIdDataTable(CollaboratorCustomerManagerModel model)
        {
            DataTable dataTable = new DataTable();

            var connectPostgres = new ConnectToPostgresql(_configuration);

            using (var conn = await connectPostgres.CreateConnectionAsync())
            {
                using (var command = new NpgsqlCommand("SELECT * FROM dbo.get_all_collaborators_descendants(@p_parent_id, @p_start_date, @p_end_date)", conn))
                {
                    command.Parameters.AddWithValue("@p_parent_id", model.Id);
                    command.Parameters.AddWithValue("@p_start_date", model?.StartDate ?? (object)DBNull.Value); 
                    command.Parameters.AddWithValue("@p_end_date", model?.EndDate ?? (object)DBNull.Value);
                    command.CommandTimeout = 400;

                    using (var adapter = new NpgsqlDataAdapter(command))
                    {
                        adapter.Fill(dataTable);
                    }
                }

                await conn.CloseAsync();
            }

            return dataTable;
        }

        public async Task<MemoryStream> ExportExcelAllCollaboratorsByParendId(CollaboratorCustomerManagerModel model)
        {
            var exportFile = new MemoryStream();

            #region Call data API
            var collaborators = await ExportExcelAllCollaboratorsByParendIdDataTable(model);
            #endregion

            #region Export Excel from template
            // Đường dẫn tới file template
            string templatePath = Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), "wwwroot", "template", "Export_Collaborator_CustomerManager.xlsx");

            // Đọc file template Excel
            var fileInfo = new FileInfo(templatePath);
            using (var package = new OfficeOpenXml.ExcelPackage(fileInfo))
            {
                // Lấy worksheet đầu tiên
                var worksheet = package.Workbook.Worksheets[0];
                string reportTitle = $"BÁO CÁO QUẢN LÝ KHÁCH HÀNG CỦA CTV ID: EL{model.Id}";
                worksheet.Cells["A1"].Value = reportTitle;
                worksheet.Cells["A1:G1"].Merge = true; // Hợp nhất các ô
                worksheet.Cells["A1"].Style.HorizontalAlignment = ExcelHorizontalAlignment.Center; // Căn giữa ngang
                worksheet.Cells["A1"].Style.VerticalAlignment = ExcelVerticalAlignment.Center; // Căn giữa dọc
                worksheet.Cells["A1"].Style.Font.Size = 14; // Kích thước font chữ
                worksheet.Cells["A1"].Style.Font.Bold = true;
                worksheet.Cells["A4"].LoadFromDataTable(collaborators, false);

                // Tự động điều chỉnh kích thước cột
                worksheet.Cells[worksheet.Dimension.Address].AutoFitColumns();

                if (collaborators.Rows.Count > 0)
                {
                    var range = worksheet.Cells["A4:G" + (collaborators.Rows.Count + 6).ToString()];
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

        public async Task<List<CollaboratorSystemManagerDto>> GetCollaboratorsSystemManager(int CollaboratorId)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();

            try
            {
                var query = @"SELECT * FROM dbo.get_collaborators_with_level(@input_id)";

                var parameters = new
                {
                    input_id = CollaboratorId
                };

                var result = (await connection.QueryAsync<CollaboratorSystemManagerDto>(query, parameters)).AsList();
                return result;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error fetching GetCollaboratorsSystemManager: {ex.Message}");
                return new List<CollaboratorSystemManagerDto>();
            }
            finally
            {
                await connection.CloseAsync();
            }
        }

        public async Task<decimal?> GetTotalValueWithLevelAsync(int inputId)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();

            try
            {
                var query = "SELECT * FROM dbo.get_totalValue_with_level(@InputId)";
                var parameters = new { InputId = inputId };

                // Thực thi truy vấn và lấy kết quả
                var result = await connection.QueryFirstOrDefaultAsync<decimal?>(query, parameters);

                return result;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error fetching GetTotalValueWithLevelAsync: {ex.Message}");
                return 0;
            }
            finally
            {
                await connection.CloseAsync();
            }
        }

        public async Task<CollaboratorDto> GetCollaboratorsContractManager(int CollaboratorId)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();

            try
            {
                var query = @"SELECT * FROM dbo.get_collaborators_contract_manager(@input_id)";

                var parameters = new
                {
                    input_id = CollaboratorId
                };

                var result = (await connection.QueryFirstOrDefaultAsync<CollaboratorDto>(query, parameters));
                return result;

            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error fetching GetCollaboratorsContractManager: {ex.Message}");
                return new CollaboratorDto();
            }
            finally
            {
                await connection.CloseAsync();
            }

        }

        public async Task<List<CollaboratorTopDto>> GetCollaboratorsTop()
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();

            try
            {
                var query = @"SELECT * FROM dbo.get_collaborator_top()";
                var result = (await connection.QueryAsync<CollaboratorTopDto>(query)).AsList();
                return result;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error fetching GetCollaboratorsTop: {ex.Message}");
                return new List<CollaboratorTopDto>();
            }
            finally
            {
                await connection.CloseAsync();
            }
        }

        public async Task<DataTable> ExportExcelCollaboratorsTopDataTable()
        {
            DataTable dataTable = new DataTable();

            var connectPostgres = new ConnectToPostgresql(_configuration);

            using (var conn = await connectPostgres.CreateConnectionAsync())
            {
                using (var command = new NpgsqlCommand("SELECT * FROM dbo.get_collaborator_top()", conn))
                {
                    command.CommandTimeout = 400;

                    using (var adapter = new NpgsqlDataAdapter(command))
                    {
                        adapter.Fill(dataTable);
                    }
                }

                await conn.CloseAsync();
            }

            return dataTable;
        }

        public async Task<MemoryStream> ExportExcelCollaboratorsTop()
        {
            var exportFile = new MemoryStream();

            #region Call data API
            var collaborators = await ExportExcelCollaboratorsTopDataTable();
            #endregion

            #region Export Excel from template
            // Đường dẫn tới file template
            string templatePath = Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), "wwwroot", "template", "Export_Collaborator_Top.xlsx");

            // Đọc file template Excel
            var fileInfo = new FileInfo(templatePath);
            using (var package = new OfficeOpenXml.ExcelPackage(fileInfo))
            {
                // Lấy worksheet đầu tiên
                var worksheet = package.Workbook.Worksheets[0];
                string reportTitle = $"BẢNG TOP THÀNH VIÊN CỦA HỆ THỐNG";
                worksheet.Cells["A1"].Value = reportTitle;
                worksheet.Cells["A1:E1"].Merge = true; // Hợp nhất các ô
                worksheet.Cells["A1"].Style.HorizontalAlignment = ExcelHorizontalAlignment.Center; // Căn giữa ngang
                worksheet.Cells["A1"].Style.VerticalAlignment = ExcelVerticalAlignment.Center; // Căn giữa dọc
                worksheet.Cells["A1"].Style.Font.Size = 14; // Kích thước font chữ
                worksheet.Cells["A1"].Style.Font.Bold = true;
                worksheet.Cells["A4"].LoadFromDataTable(collaborators, false);

                // Tự động điều chỉnh kích thước cột
                worksheet.Cells[worksheet.Dimension.Address].AutoFitColumns();

                if (collaborators.Rows.Count > 0)
                {
                    var range = worksheet.Cells["A4:E" + (collaborators.Rows.Count + 6).ToString()];
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

        public async Task<List<CollaboratorDto>> GetAllCollaborators(CollaboratorMemberManagerModel model)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();

            try
            {
                var query = @"SELECT * FROM dbo.get_all_collaborators(@p_start_date, @p_end_date)";

                var parameters = new
                {
                    p_start_date = model.StartDate,
                    p_end_date = model.EndDate,
                };

                var result = (await connection.QueryAsync<CollaboratorDto>(query, parameters)).AsList();
                return result;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error fetching GetAllCollaborators: {ex.Message}");
                return new List<CollaboratorDto>();
            }
            finally
            {
                await connection.CloseAsync();
            }
        }

        public async Task<DataTable> ExportExcelAllCollaboratorsDataTable(CollaboratorMemberManagerModel model)
        {
            DataTable dataTable = new DataTable();

            var connectPostgres = new ConnectToPostgresql(_configuration);

            using (var conn = await connectPostgres.CreateConnectionAsync())
            {
                using (var command = new NpgsqlCommand("SELECT * FROM dbo.get_all_collaborators(@p_start_date, @p_end_date)", conn))
                {
                    command.Parameters.AddWithValue("@p_start_date", model?.StartDate ?? (object)DBNull.Value);
                    command.Parameters.AddWithValue("@p_end_date", model?.EndDate ?? (object)DBNull.Value);
                    command.CommandTimeout = 400;

                    using (var adapter = new NpgsqlDataAdapter(command))
                    {
                        adapter.Fill(dataTable);
                    }
                }

                await conn.CloseAsync();
            }

            return dataTable;
        }

        public async Task<MemoryStream> ExportExcelAllCollaborators(CollaboratorMemberManagerModel model)
        {
            var exportFile = new MemoryStream();

            #region Call data API
            var collaborators = await ExportExcelAllCollaboratorsDataTable(model);
            #endregion

            #region Export Excel from template
            // Đường dẫn tới file template
            string templatePath = Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), "wwwroot", "template", "Export_Collaborator_CustomerManager.xlsx");

            // Đọc file template Excel
            var fileInfo = new FileInfo(templatePath);
            using (var package = new OfficeOpenXml.ExcelPackage(fileInfo))
            {
                // Lấy worksheet đầu tiên
                var worksheet = package.Workbook.Worksheets[0];
                string reportTitle = $"BÁO CÁO QUẢN LÝ KHÁCH HÀNG CỦA HỆ THỐNG";
                worksheet.Cells["A1"].Value = reportTitle;
                worksheet.Cells["A1:G1"].Merge = true; // Hợp nhất các ô
                worksheet.Cells["A1"].Style.HorizontalAlignment = ExcelHorizontalAlignment.Center; // Căn giữa ngang
                worksheet.Cells["A1"].Style.VerticalAlignment = ExcelVerticalAlignment.Center; // Căn giữa dọc
                worksheet.Cells["A1"].Style.Font.Size = 14; // Kích thước font chữ
                worksheet.Cells["A1"].Style.Font.Bold = true;
                worksheet.Cells["A4"].LoadFromDataTable(collaborators, false);

                // Tự động điều chỉnh kích thước cột
                worksheet.Cells[worksheet.Dimension.Address].AutoFitColumns();

                if (collaborators.Rows.Count > 0)
                {
                    var range = worksheet.Cells["A4:G" + (collaborators.Rows.Count + 6).ToString()];
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

        public async Task<bool> DeleteCollaborator(int id, int idNew)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();

            try
            {
                var query = @"SELECT dbo.update_parent_id(@OldParentId, @NewParentId);";

                var parameters = new
                {
                    OldParentId = id,
                    NewParentId = idNew,
                };

                var result = await connection.ExecuteScalarAsync<bool>(query, parameters);

                return result;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error fetching GetAllCollaborators: {ex.Message}");
                return false;
            }
            finally
            {
                await connection.CloseAsync();
            }
        }

        public async Task<TotalWalletAdmin> GetTotalWalletAdmin()
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();

            try
            {
                var query = @"SELECT * FROM dbo.calculate_wallet_totals()";

                var result = (await connection.QueryFirstOrDefaultAsync<TotalWalletAdmin>(query));
                return result;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error fetching GetTotalWalletAdmin: {ex.Message}");
                return new TotalWalletAdmin();
            }
            finally
            {
                await connection.CloseAsync();
            }
        }

        public async Task<List<CollaboratorTreeDto>> GetCollaborators()
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();

            try
            {
                var query = @"SELECT * FROM dbo.get_collaborator_tree()";

                var result = (await connection.QueryAsync<CollaboratorTreeDto>(query)).AsList();
                return result;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error fetching GetAllCollaborators: {ex.Message}");
                return new List<CollaboratorTreeDto>();
            }
            finally
            {
                await connection.CloseAsync();
            }
        }

        public List<TreeNode> BuildTree(List<CollaboratorTreeDto> collaborators)
        {
            var map = new Dictionary<int, TreeNode>();
            var result = new List<TreeNode>();

            // Tạo các node TreeNode từ dữ liệu
            foreach (var collaborator in collaborators)
            {
                map[collaborator.Id] = new TreeNode
                {
                    Label = collaborator.UserName,
                    Data = collaborator.Id.ToString(),
                };
            }

            // Xây dựng cấu trúc cây
            foreach (var collaborator in collaborators)
            {
                if (collaborator.ParentId == null)
                {
                    // Nếu là node gốc, thêm vào result
                    result.Add(map[collaborator.Id]);
                }
                else
                {
                    // Nếu không phải gốc, tìm parent và thêm vào children
                    map[collaborator.ParentId.Value].Children.Add(map[collaborator.Id]);
                }
            }

            return result;
        }
    }
}

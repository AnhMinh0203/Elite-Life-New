using Dapper;
using Elite_life_datacontext.DataBase;
using Elite_life_datacontext.Dto;
using Elite_life_repository.Interfaces;
using Microsoft.Extensions.Configuration;
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
    public class WalletDetailReoisitory : IWalletDetailRepos
    {
        private readonly IConfiguration _configuration;
        public WalletDetailReoisitory(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public async Task<DataTable> ExportExcelWalletDetailAdminDataTableAsync(string date, int type)
        {
            DataTable dataTable = new DataTable();
            dataTable.Columns.Add("Note", typeof(string));
            dataTable.Columns.Add("Value", typeof(string));
            dataTable.Columns.Add("CreatedAt", typeof(DateTime));
            dataTable.Columns.Add("Status", typeof(string));

            var connectPostgres = new ConnectToPostgresql(_configuration);

            using (var conn = await connectPostgres.CreateConnectionAsync())
            {
                var query = "";
                if (type == 1)
                {
                    query = @"SELECT * FROM dbo.get_wallet_comission_details_by_month_year(@input_date)";
                }
                else if (type == 2)
                {
                    query = @"SELECT * FROM dbo.get_wallet_gratitude_details_by_month_year(@input_date)";
                }
                else if (type == 3)
                {
                    query = @"SELECT * FROM dbo.get_wallet_source_details_by_month_year(@input_date)";
                }
                else
                {
                    query = @"SELECT * FROM dbo.get_wallet_c_details_by_month_year(@input_date)";
                }
                using (var command = new NpgsqlCommand(query, conn))
                {
                    command.Parameters.AddWithValue("@input_date", date);
                    command.CommandTimeout = 400;

                    using (var adapter = new NpgsqlDataAdapter(command))
                    {
                        adapter.Fill(dataTable);
                    }
                }
                foreach (DataRow row in dataTable.Rows)
                {
                    row["Status"] = "Thành công";
                }
                await conn.CloseAsync();
            }
            return dataTable;
        }

        public async Task<MemoryStream> ExportExcelWalletDetailAdminAsync(string date, int type)
        {
            var exportFile = new MemoryStream();

            #region Call data API
            var collaborators = await ExportExcelWalletDetailAdminDataTableAsync(date, type);
            #endregion

            #region Export Excel from template
            // Đường dẫn tới file template
            string templatePath = Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), "wwwroot", "template", "Export_Wallet.xlsx");

            // Đọc file template Excel
            var fileInfo = new FileInfo(templatePath);
            using (var package = new OfficeOpenXml.ExcelPackage(fileInfo))
            {
                // Lấy worksheet đầu tiên
                var worksheet = package.Workbook.Worksheets[0];
                var query = "";
                if (type == 1)
                {
                    query = "Quản lý ví tri ân khách hàng";
                }
                else if (type == 2)
                {
                    query = "Quản lý ví hoa hồng";
                }
                else if (type == 3)
                {
                    query = "Quản lý ví tài khoản";
                }
                else
                {
                    query = "Quản lý ví C";
                }
                string reportTitle = query;
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

        public async Task<List<WalletDetailCommissionDto>> GetCommissionByCollaboratorId(int? CollaboratorId, int? type)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();
            try
            {
                var query = @"SELECT * FROM dbo.get_wallet_details(@collaborator_id)";
                if(type == 1)
                {
                    query = @"SELECT * FROM dbo.get_wallet_gratitude_details(@collaborator_id)";
                }
                if(type == 2)
                {
                    query = @"SELECT * FROM dbo.get_wallet_source_details(@collaborator_id)";
                }
                var parameters = new
                {
                    collaborator_id = CollaboratorId
                };
                var result = (await connection.QueryAsync<WalletDetailCommissionDto>(query, parameters)).AsList();

                return (result);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error fetching GetCommissionByCollaboratorId: {ex.Message}");
                return new List<WalletDetailCommissionDto>();
            }
            finally
            {
                await connection.CloseAsync();
            }
        }

        public async Task<List<WalletDetailAdminDto>> GetWalletDetailAdminAsync(string date, int type)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();
            try
            {
                var query = "";
                if(type == 1)
                {
                    query = @"SELECT * FROM dbo.get_wallet_comission_details_by_month_year(@input_date)";
                }
                else if (type == 2)
                {
                    query = @"SELECT * FROM dbo.get_wallet_gratitude_details_by_month_year(@input_date)";
                }
                else if (type == 3)
                {
                    query = @"SELECT * FROM dbo.get_wallet_source_details_by_month_year(@input_date)";
                }
                else
                {
                    query = @"SELECT * FROM dbo.get_wallet_c_details_by_month_year(@input_date)";
                }
                var parameters = new
                {
                    input_date = date
                };
                var result = (await connection.QueryAsync<WalletDetailAdminDto>(query, parameters)).AsList();

                return (result);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error fetching GetWalletDetailAdminAsync: {ex.Message}");
                return new List<WalletDetailAdminDto>();
            }
            finally
            {
                await connection.CloseAsync();
            }
        }

        public async Task<List<StatisticalWalletDetailDto>> GetWalletDetailAdminReportAsync(string date, int type)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();
            try
            {
                var query = "";
                if (type == 1)
                {
                    query = @"SELECT * FROM dbo.get_wallet_comission_by_hour(@input_date)";
                }
                else if (type == 2)
                {
                    query = @"SELECT * FROM dbo.get_wallet_gratitude_by_hour(@input_date)";
                }
                else if (type == 3)
                {
                    query = @"SELECT * FROM dbo.get_wallet_source_by_hour(@input_date)";
                }
                else
                {
                    query = @"SELECT * FROM dbo.get_wallet_c_by_hour(@input_date)";
                }
                var parameters = new
                {
                    input_date = date
                };
                var result = (await connection.QueryAsync<StatisticalWalletDetailDto>(query, parameters)).AsList();

                return (result);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error fetching GetWalletDetailAdminReportAsync: {ex.Message}");
                return new List<StatisticalWalletDetailDto>();
            }
            finally
            {
                await connection.CloseAsync();
            }
        }
    }
}

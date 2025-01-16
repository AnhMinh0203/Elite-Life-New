using Dapper;
using Elite_life_datacontext.DataBase;
using Elite_life_datacontext.Model;
using Elite_life_datacontext.Utils;
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
    public class AccountRepository: IAccountManagerRepons
    {
        private readonly IConfiguration _configuration;
        private readonly PasswordManager _passwordManager;
        public AccountRepository(IConfiguration configuration, PasswordManager passwordManager)
        {
            _configuration = configuration;
            _passwordManager = passwordManager;
        }

        public async Task<List<MemberManagerModel>> GetAllAccountsAsync()
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();
            try
            {
                var query = @"SELECT ""UserName"", ""Name"", ""Email"" FROM dbo.""Collaborators"" where ""ApplicationType"" = 'User'";
                var members = await connection.QueryAsync<MemberManagerModel>(query);
                return members.ToList();
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error getting all banks: {ex.Message}");
                return null;
            }
            finally
            {
                connection.Close();
            }
        }

        public async Task<string> DeleteAccountAsync(string userName)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();
            try
            {
                var query = @"SELECT dbo.delete_account(@UserName);";
                var result = await connection.ExecuteScalarAsync<string>(query, new { UserName = userName });
                return result;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error deleting account: {ex.Message}");
                return "Lỗi: Có vấn đề xảy ra khi xóa tài khoản.";
            }
            finally
            {
                await connection.CloseAsync();
            }
        }

        public async Task<List<MemberManagerModel>> GetAccountsByRange(AccountRangeModel accountRangeModel)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();

            try
            {
                var sql = @"
            SELECT * FROM dbo.get_account_range(
                @StartDate, 
                @EndDate
            )";
                var parameters = new
                {
                    StartDate = accountRangeModel.StartDate ?? (object)DBNull.Value,
                    EndDate = accountRangeModel.EndDate ?? (object)DBNull.Value
                };

                // Execute query using Dapper
                var result = (await connection.QueryAsync<MemberManagerModel>(sql, parameters)).ToList();

                return result;
            }
            catch (Exception ex)
            {
                // Handle the exception as needed
                return null;
            }
            finally
            {
                await connection.CloseAsync();
            }
        }


        public async Task<DataTable> ExportExcelAccountDataTable(AccountRangeModel accountRangeModel)
        {
            DataTable dataTable = new DataTable();

            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();

            try
            {
                using var command = connection.CreateCommand();
                command.CommandText = @"
                    SELECT ""username"",""name"",  ""email""
                    FROM dbo.get_account_range(
                        @p_start_date, 
                        @p_end_date
                    )";


                command.Parameters.AddWithValue("@p_start_date", accountRangeModel.StartDate);
                command.Parameters.AddWithValue("@p_end_date", accountRangeModel.EndDate);

                using (var adapter = new NpgsqlDataAdapter(command))
                {
                    adapter.Fill(dataTable);
                }

                return dataTable;


            }
            catch (Exception ex)
            {
                return null;
            }
            finally
            {
                await connection.CloseAsync();
            }

        }

        public async Task<MemoryStream> ExportExcelAccounts(AccountRangeModel accountRangeModel)
        {
            var exportFile = new MemoryStream();

            #region Call data API
            var histories = await ExportExcelAccountDataTable(accountRangeModel);
            #endregion

            #region Export Excel from template
            // Đường dẫn tới file template
            string templatePath = Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), "wwwroot", "template", "Export_Account_User.xlsx");
            Console.WriteLine($"Template path: {templatePath}");
            if (!File.Exists(templatePath))
            {
                throw new FileNotFoundException("Template file not found", templatePath);
            }


            // Đọc file template Excel
            var fileInfo = new FileInfo(templatePath);
            using (var package = new OfficeOpenXml.ExcelPackage(fileInfo))
            {
                // Lấy worksheet đầu tiên
                var worksheet = package.Workbook.Worksheets[0];
                string reportTitle = $"DANH SÁCH USER";
                worksheet.Cells["A1"].Value = reportTitle;
                worksheet.Cells["A1:D1"].Merge = true; // Hợp nhất các ô
                worksheet.Cells["A1"].Style.HorizontalAlignment = ExcelHorizontalAlignment.Center; // Căn giữa ngang
                worksheet.Cells["A1"].Style.VerticalAlignment = ExcelVerticalAlignment.Center; // Căn giữa dọc
                worksheet.Cells["A1"].Style.Font.Size = 14; // Kích thước font chữ
                worksheet.Cells["A1"].Style.Font.Bold = true;
                worksheet.Cells["A4"].LoadFromDataTable(histories, false);

                // Tự động điều chỉnh kích thước cột
                worksheet.Cells[worksheet.Dimension.Address].AutoFitColumns();

                if (histories.Rows.Count > 0)
                {
                    var range = worksheet.Cells["A4:D" + (histories.Rows.Count + 6).ToString()];
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

        public async Task<string> CreateAccountAdminAsync(AccountCreateModel accountCreateModel)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();
            try
            {
                // Gọi hàm PostgreSQL để thêm dữ liệu
                var commandText = "select * from dbo.create_account_admin(@Name, @UserName, @Identity, @BankNumber, @Bank, @IdentityDate, @BankBranchName, @IdentityPlace, @BankOwner, @Phone, @Email, @Password);";
                using var command = new NpgsqlCommand(commandText, connection);

                var salt = _passwordManager.GenerateSalt();
                var hashedPassword = _passwordManager.HashPassword(accountCreateModel.Password, salt);

                // Gán giá trị tham số từ AccountCreateModel
                command.Parameters.AddWithValue("@Name", accountCreateModel.Name ?? (object)DBNull.Value);
                command.Parameters.AddWithValue("@UserName", accountCreateModel.UserName ?? (object)DBNull.Value);
                command.Parameters.AddWithValue("@Identity", accountCreateModel.Identity ?? (object)DBNull.Value);
                command.Parameters.AddWithValue("@BankNumber", accountCreateModel.BankNumber ?? (object)DBNull.Value);
                command.Parameters.AddWithValue("@Bank", accountCreateModel.Bank ?? (object)DBNull.Value);
                command.Parameters.AddWithValue("@IdentityDate", accountCreateModel.IdentityDate ?? (object)DBNull.Value);
                command.Parameters.AddWithValue("@BankBranchName", accountCreateModel.BankBranchName ?? (object)DBNull.Value);
                command.Parameters.AddWithValue("@IdentityPlace", accountCreateModel.IdentityPlace ?? (object)DBNull.Value);
                command.Parameters.AddWithValue("@BankOwner", accountCreateModel.BankOwner ?? (object)DBNull.Value);
                command.Parameters.AddWithValue("@Phone", accountCreateModel.Phone ?? (object)DBNull.Value);
                command.Parameters.AddWithValue("@Email", accountCreateModel.Email ?? (object)DBNull.Value);
                command.Parameters.AddWithValue("@Password", hashedPassword ?? (object)DBNull.Value);

                // Thực thi lệnh và lấy kết quả trả về từ hàm PostgreSQL
                var result = await command.ExecuteScalarAsync();

                // Chuyển đổi kết quả thành chuỗi
                return result?.ToString() ?? "Lỗi: Không nhận được phản hồi từ máy chủ.";
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error deleting account: {ex.Message}");
                return "Lỗi: Có vấn đề xảy ra khi xóa tài khoản.";
            }
            finally
            {
                await connection.CloseAsync();
            }
        }

    }
}

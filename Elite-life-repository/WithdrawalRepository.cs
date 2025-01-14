using Dapper;
using Elite_life_datacontext.DataBase;
using Elite_life_datacontext.Dto;
using Elite_life_datacontext.Model;
using Elite_life_datacontext.Utils;
using Elite_life_repository.Interfaces;
using IdentityModel.Client;
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
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

namespace Elite_life_repository
{
    public class WithdrawalRepository : IWithdrawalRepos
    {
        private readonly IConfiguration _configuration;
        public WithdrawalRepository(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        /*        public async Task<int> GetCollaboratorIdByUserNameAsync(string userName)
                {
                    var connectPostgres = new ConnectToPostgresql(_configuration);
                    using var connection = await connectPostgres.CreateConnectionAsync();

                    var query = "SELECT dbo.get_collaborator_by_username(@UserName);";
                    int collaboratorId = await connection.QuerySingleOrDefaultAsync<int>(
                            query,
                            new { UserName = userName }
                        );
                    return collaboratorId;
                }*/

        public async Task<WithdrawMoneyModel?> WithdrawMoneyAsync(string userName)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();

            var getCollaboratorIdCommand = "SELECT dbo.get_collaborator_by_username(@UserName);";

            int collaboratorId = await connection.QuerySingleOrDefaultAsync<int>(
                getCollaboratorIdCommand,
                new { UserName = userName }
            );

            if (collaboratorId == -1)
            {
                throw new Exception($"Không tìm thấy mã {userName}");
            }
            var getWalletSourceCommand = "SELECT * from dbo.withdraw_money(@CollaboratorId);";

            var result = await connection.QuerySingleOrDefaultAsync<WithdrawMoneyModel>(
                getWalletSourceCommand,
                new { CollaboratorId = collaboratorId }
            );

            return result;
        }

        public async Task<List<string>> GetBanksAsync()
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();
            try
            {
                var query = @"SELECT ""Name"" FROM dbo.""Banks""";
                var banks = await connection.QueryAsync<string>(query);
                return banks.ToList();
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

        public async Task<int?> GetCollaboratorIdAsync(string userName)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();
            try
            {
                var query = @"SELECT ""Id"" FROM dbo.""Collaborators"" WHERE ""UserName"" = @UserName";


                var result = await connection.QuerySingleOrDefaultAsync<int?>(query, new { UserName = userName });

                return result;
            }
            catch (Exception ex)
            {
                return null;
            }
            finally
            {
                connection.Close();
            }
        }

        public async Task<string> RequestWithdrawMoneyAsync(RequestWithdrawMoneyModel requestWithdrawMoneyModel)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();
            try
            {
                using var command = connection.CreateCommand();
                command.CommandText =
                    @"SELECT dbo.execute_withdraw_money(
                    @p_collaboratorid, 
                    @p_banknumber, 
                    @p_bankowner, 
                    @p_bank, 
                    @p_bankbranchname, 
                    @p_withdrawamount, 
                    @p_status, 
                    @p_tax, 
                    @p_actualnumberreceived
                );";

                command.Parameters.AddWithValue("p_collaboratorid", requestWithdrawMoneyModel.CollaboratorId);
                command.Parameters.AddWithValue("p_banknumber", requestWithdrawMoneyModel.BankNumber ?? (object)DBNull.Value);
                command.Parameters.AddWithValue("p_bankowner", requestWithdrawMoneyModel.BankOwner ?? (object)DBNull.Value);
                command.Parameters.AddWithValue("p_bank", requestWithdrawMoneyModel.Bank ?? (object)DBNull.Value);
                command.Parameters.AddWithValue("p_bankbranchname", requestWithdrawMoneyModel.BankBranchName ?? (object)DBNull.Value);
                command.Parameters.AddWithValue("p_withdrawamount", requestWithdrawMoneyModel.WithdrawalAmount);
                command.Parameters.AddWithValue("p_status", requestWithdrawMoneyModel.Status ?? (object)DBNull.Value);
                command.Parameters.AddWithValue("p_tax", requestWithdrawMoneyModel.Tax);
                command.Parameters.AddWithValue("p_actualnumberreceived", requestWithdrawMoneyModel.ActualNumberReceived);

                var result = (string)await command.ExecuteScalarAsync();
                return result;

            }
            catch (Exception ex)
            {

                return $"Có lỗi khi xử lý: {ex.Message}";
            }
            finally
            {
                connection.Close();
            }
        }
        public async Task<List<WalletHistoryModel>> GetWalletHistoryAsync(WithdrawMoneyRange withdrawMoneyRange)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();

            try
            {
                var sql = @"
                    SELECT * FROM dbo.get_wallet_history(
                        @CollaboratorId, 
                        @StartDate, 
                        @EnDate
                    )";
                var parameters = new
                {
                    CollaboratorId = withdrawMoneyRange.CollaboratorId,
                    StartDate = withdrawMoneyRange.StartDate ?? (object)DBNull.Value,
                    EnDate = withdrawMoneyRange.EndDate ?? (object)DBNull.Value
                };

                // Execute query using Dapper
                var result = (await connection.QueryAsync<WalletHistoryModel>(sql, parameters)).ToList();

                return result;


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

        public async Task<decimal?> GetWalletByTypeAsync(WalletType wallet)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();
            try
            {
                var sql = @"
                    SELECT * FROM dbo.get_wallet_by_type(
                        @CollaboratorId, 
                        @WalletType
                    )";
                var parameters = new
                {
                    CollaboratorId = wallet.CollaboratorId,
                    WalletType = wallet.Type
                };

                // Execute query using Dapper
                var result = await connection.ExecuteScalarAsync<decimal?>(sql, parameters);

                return result;


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

        public async Task<List<ClientsWallet>> GetWalletClientsAsync()
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();
            try
            {
                var sql = @"SELECT * FROM dbo.get_list_clients()";

                // Execute query using Dapper
                var result = await connection.QueryAsync<ClientsWallet>(sql);
                return result.ToList();
            }
            catch (Exception ex)
            {
                Console.Error.WriteLine($"Error occurred: {ex.Message}");
                return new List<ClientsWallet>(); // Return empty list in case of failure
            }
            finally
            {
                await connection.CloseAsync();
            }
        }

        public async Task<string> WithdrawCommissionWalletAsync(WithdrawCommissionRequire request)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);

            await using var connection = await connectPostgres.CreateConnectionAsync();
            await using var transaction = await connection.BeginTransactionAsync(System.Data.IsolationLevel.Serializable);

            try
            {
                using var command = connection.CreateCommand();
                command.CommandText = @"SELECT dbo.withdraw_commission_with_serializable(
                    @p_collaboratorid,
                    @p_commissionAmount, 
                    @p_walletType)";

                command.Parameters.AddWithValue("@p_collaboratorId", request.CollaboratorId);
                command.Parameters.AddWithValue("@p_commissionAmount", request.WithdrawAmount);
                command.Parameters.AddWithValue("@p_walletType", request.WalletType);

                var result = (string)await command.ExecuteScalarAsync();

                if (result == "Rút tiền thành công")
                {
                    await transaction.CommitAsync();
                    return result;
                }

                await transaction.RollbackAsync();
                return result ?? "Lỗi không xác định khi thực hiện rút tiền.";
            }
            catch (Exception ex)
            {
                await transaction.RollbackAsync();
                return $"Lỗi khi xử lý: {ex.Message}";
            }
            finally
            {
                await connection.CloseAsync();
            }
        }


        public async Task<string> CreateWalletHistoryAsync(CreateWalletHistory createWalletHistory)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();

            try
            {
                using var command = connection.CreateCommand();
                command.CommandText = @"SELECT * FROM dbo.create_wallet_history(
                    @p_collaboratorId, 
                    @p_walletType, 
                    @p_value,
                    @p_note)";

                command.Parameters.AddWithValue("@p_collaboratorId", createWalletHistory.CollaboratorId);
                command.Parameters.AddWithValue("@p_walletType", createWalletHistory.WalletType);
                command.Parameters.AddWithValue("@p_value", createWalletHistory.Value);
                command.Parameters.AddWithValue("@p_note", createWalletHistory.Note);

                await command.ExecuteNonQueryAsync();
                return "Lịch sử ví đã được tạo thành công.";
            }
            catch (Exception ex)
            {
                return $"Lỗi khi xử lý: {ex.Message}";
            }
            finally
            {
                await connection.CloseAsync();
            }
        }


        public async Task<DataTable> ExportExcelWalletHistoryDataTable(WithdrawMoneyRange withdrawMoneyRange)
        {
            DataTable dataTable = new DataTable();

            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();

            try
            {
                using var command = connection.CreateCommand();
                command.CommandText = @"
                    SELECT ""note"",""value"", 
                           to_char(""createdat"", 'DD-MM-YYYY HH24:MI:SS') AS ""createdat"", 
                           ""status""
                    FROM dbo.get_wallet_history(
                        @p_collaborator_id, 
                        @p_start_date, 
                        @p_end_date
                    )";


                command.Parameters.AddWithValue("@p_collaborator_id", withdrawMoneyRange.CollaboratorId);
                command.Parameters.AddWithValue("@p_start_date", withdrawMoneyRange.StartDate);
                command.Parameters.AddWithValue("@p_end_date", withdrawMoneyRange.EndDate);

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

        public async Task<MemoryStream> ExportExcelCollaboratorsByParendId(WithdrawMoneyRange withdrawMoneyRange)
        {
            var exportFile = new MemoryStream();

            #region Call data API
            var histories = await ExportExcelWalletHistoryDataTable(withdrawMoneyRange);
            #endregion

            #region Export Excel from template
            // Đường dẫn tới file template
            string templatePath = Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), "wwwroot", "template", "Export_Wallet_History.xlsx");
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
                string reportTitle = $"BẢNG LỊCH SỬ NẠP RÚT ID: EL{withdrawMoneyRange.CollaboratorId}";
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

        public async Task<string> TransferMoneyAsync(TransferRequestModel transferRequestModel)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();
            await using var transaction = await connection.BeginTransactionAsync(System.Data.IsolationLevel.Serializable);

            try
            {
                using var command = connection.CreateCommand();
                command.CommandText = @"SELECT * FROM dbo.transfer_money_with_serializable(
                    @p_collaboratorId, 
                    @p_userNameReceive, 
                    @p_amountReceive)";

                command.Parameters.AddWithValue("@p_collaboratorId", transferRequestModel.CollaboratorId);
                command.Parameters.AddWithValue("@p_userNameReceive", transferRequestModel.UserNameReceive);
                command.Parameters.AddWithValue("@p_amountReceive", transferRequestModel.AmountReceive);

                var result = (string)await command.ExecuteScalarAsync();
                await transaction.CommitAsync(); // Commit transaction
                return result;
            }
            catch (Exception ex)
            {
                await transaction.RollbackAsync(); // Rollback transaction in case of error
                return $"Lỗi khi xử lý: {ex.Message}";
            }
            finally
            {
                await connection.CloseAsync();
            }
        }


        public async Task<List<WithdrawalRequestDto>> GetProcessingWithdrawalRequestsAsync(CollaboratorMemberManagerModel model)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();

            try
            {
                var query = @"SELECT * FROM dbo.get_processing_withdrawal_requests(@p_start_date, @p_end_date)";
                var parameters = new
                {
                    p_start_date = model.StartDate?.ToString("yyyy-MM-dd"),
                    p_end_date = model.EndDate?.ToString("yyyy-MM-dd"),
                };

                var result = (await connection.QueryAsync<WithdrawalRequestDto>(query, parameters)).AsList();
                return result;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error fetching GetProcessingWithdrawalRequestsAsync: {ex.Message}");
                return new List<WithdrawalRequestDto>();
            }
            finally
            {
                await connection.CloseAsync();
            }
        }

        public async Task<bool> ApproveWithdrawal(int WithdrawalRequestId, string? note)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();

            try
            {
                var query = @"SELECT * FROM dbo.approve_withdrawal(@p_withdrawal_request_id, @p_note);";

                var parameters = new
                {
                    p_withdrawal_request_id = WithdrawalRequestId,
                    p_note = note,
                };

                var result = await connection.ExecuteScalarAsync<bool>(query, parameters);
                return result;

            }
            catch (Exception ex)
            {
                return false;
            }
            finally
            {
                await connection.CloseAsync();
            }
        }

        public async Task<bool> RejectWithdrawal(int WithdrawalRequestId, string note)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();

            try
            {
                var query = @"SELECT * FROM dbo.reject_withdrawal(@p_withdrawal_request_id, @p_note_rejection);";

                var parameters = new
                {
                    p_withdrawal_request_id = WithdrawalRequestId,
                    p_note_rejection = note,
                };

                var result = await connection.ExecuteScalarAsync<bool>(query, parameters);
                return result;

            }
            catch (Exception ex)
            {
                return false;
            }
            finally
            {
                await connection.CloseAsync();
            }
        }

        public async Task<DataTable> ExportExcelProcessingWithdrawalRequestsAsyncDataTable(CollaboratorMemberManagerModel model)
        {
            DataTable dataTable = new DataTable();
            dataTable.Columns.Add("CollaboratorId", typeof(int));
            dataTable.Columns.Add("BankOwner", typeof(string));
            dataTable.Columns.Add("BankNumber", typeof(string));
            dataTable.Columns.Add("BankName", typeof(string));
            dataTable.Columns.Add("BankBranchName", typeof(string));
            dataTable.Columns.Add("WithdrawalAmount", typeof(Decimal));
            dataTable.Columns.Add("Tax", typeof(Decimal));
            dataTable.Columns.Add("ActualNumberReceived", typeof(Decimal));
            dataTable.Columns.Add("Note", typeof(string));
            dataTable.Columns.Add("Status", typeof(string));
            dataTable.Columns.Add("NoteRejection", typeof(string));
            dataTable.Columns.Add("CreatedAt", typeof(DateTime));

            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();

            try
            {
                using var command = connection.CreateCommand();
                command.CommandText = @"SELECT * FROM dbo.get_processing_withdrawal_requests(@p_start_date, @p_end_date)";


                command.Parameters.AddWithValue("@p_start_date", model.StartDate?.ToString("yyyy-MM-dd") ?? (object)DBNull.Value);
                command.Parameters.AddWithValue("@p_end_date", model.StartDate?.ToString("yyyy-MM-dd") ?? (object)DBNull.Value);

                using (var adapter = new NpgsqlDataAdapter(command))
                {
                    adapter.Fill(dataTable);
                }
                if (dataTable.Columns.Contains("CollaboratorId"))
                {
                    // Tạo cột mới "FormattedCollaboratorId"
                    dataTable.Columns.Add("FormattedCollaboratorId", typeof(string));

                    // Gán giá trị định dạng vào cột mới
                    foreach (DataRow row in dataTable.Rows)
                    {
                        var collaboratorId = row["CollaboratorId"]?.ToString();
                        row["FormattedCollaboratorId"] = $"EL{collaboratorId}";
                    }

                    // Đưa cột mới lên đầu
                    dataTable.Columns["FormattedCollaboratorId"].SetOrdinal(0);

                    // Xóa cột "CollaboratorId" cũ
                    dataTable.Columns.Remove("CollaboratorId");

                    // Đổi tên cột "FormattedCollaboratorId" thành "CollaboratorId"
                    dataTable.Columns["FormattedCollaboratorId"].ColumnName = "CollaboratorId";
                }

                if (dataTable.Columns.Contains("Id"))
                {
                    dataTable.Columns.Remove("Id");
                }
                if (dataTable.Columns.Contains("Code"))
                {
                    dataTable.Columns.Remove("Code");
                }
                if (dataTable.Columns.Contains("Image"))
                {
                    dataTable.Columns.Remove("Image");
                }
                if (dataTable.Columns.Contains("UpdatedAt"))
                {
                    dataTable.Columns.Remove("UpdatedAt");
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

        public async Task<MemoryStream> ExportExcelProcessingWithdrawalRequestsAsync(CollaboratorMemberManagerModel model)
        {
            var exportFile = new MemoryStream();

            #region Call data API
            var histories = await ExportExcelProcessingWithdrawalRequestsAsyncDataTable(model);
            #endregion

            #region Export Excel from template
            // Đường dẫn tới file template
            string templatePath = Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), "wwwroot", "template", "Export_Processing_Withdrawal_Requests.xlsx");
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
                worksheet.Cells["A4"].LoadFromDataTable(histories, false);

                // Tự động điều chỉnh kích thước cột
                worksheet.Cells[worksheet.Dimension.Address].AutoFitColumns();

                if (histories.Rows.Count > 0)
                {
                    var range = worksheet.Cells["A4:L" + (histories.Rows.Count + 6).ToString()];
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
    }
}

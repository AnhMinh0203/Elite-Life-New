using Dapper;
using Elite_life_datacontext.DataBase;
using Elite_life_datacontext.Dto;
using Elite_life_datacontext.Model;
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
using System.Text.Json;
using System.Threading.Tasks;

namespace Elite_life_repository
{
    public class OrderRepository : IOrderRepos
    {
        private readonly IConfiguration _configuration;
        public OrderRepository(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public async Task<List<OrderBillDto>> GetBillOrderInfoAsync(int OrderId)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();
            int TotalRecords = 0;
            try
            {
                var query = @"SELECT * FROM dbo.get_order_details(@order_id)";
                var parameters = new
                {
                    order_id = OrderId
                };
                var result = (await connection.QueryAsync<OrderBillDto>(query, parameters)).AsList();

                return (result);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error fetching GetBillOrderInfoAsync: {ex.Message}");
                return new List<OrderBillDto>();
            }
            finally
            {
                await connection.CloseAsync();
            }
        }

        public async Task<List<OrderInfoDto>> GetOrderInfoAsync(CollaboratorMemberManagerModel model)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();
            try
            {
                var query = @"SELECT * FROM dbo.get_order_info(@StartDate, @EndDate)";

                var parameters = new
                {
                    StartDate = model.StartDate?.ToString("yyyy-MM-dd"),
                    EndDate = model.EndDate?.ToString("yyyy-MM-dd")
                };

                var result = (await connection.QueryAsync<OrderInfoDto>(query, parameters)).AsList();

                return result;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error fetching GetOrderInfoAsync: {ex.Message}");
                return new List<OrderInfoDto>();
            }
            finally
            {
                await connection.CloseAsync();
            }
        }

        public async Task<(int NotPurchased, int Purchased)> GetPurchaseStatisticsAsync(int month, int year)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();
            try
            {
                var query = @"SELECT * FROM dbo.get_purchase_statistics(@p_month, @p_year)";
                var parameters = new
                {
                    p_month = month,
                    p_year = year
                };
                var result = (await connection.QueryFirstOrDefaultAsync<(int NotPurchased, int Purchased)>(query, parameters));

                return (result);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error fetching GetBillOrderInfoAsync: {ex.Message}");
                return (0,0);
            }
            finally
            {
                await connection.CloseAsync();
            }
        }

        public async Task<bool> UpdateOrderDeliveryDate(OrderDeliveryDateModel model)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();

            try
            {
                var query = @"SELECT * FROM dbo.update_order_delivery_date(@input_id, @input_delivery_date)";
                var parameters = new
                {
                    input_id = model.Id,
                    input_delivery_date = model.DeliveryDate.Value.ToString("yyyy-MM-dd HH:mm:ss")
                };

                var result = (await connection.QueryAsync<OrderDeliveryDateDto>(query, parameters)).AsList();
                if (result == null || !result.Any() || result.First().DeliveryDate == null)
                    return false;

                return true;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error updating delivery date. Id: {model.Id}, DeliveryDate: {model.DeliveryDate}. Exception: {ex.Message}");
                return false;
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

        public async Task<OrderResultModel> PlaceOrderAsync(PlaceOrderModel placeOrderModel)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();

            try
            {
                using var command = connection.CreateCommand();
                command.CommandText = @"SELECT * FROM dbo.create_order(
                    @p_collaboratorId, 
                    @p_productid, 
                    @p_value,
                    @p_amount,
                    @p_payed)";

                command.Parameters.AddWithValue("@p_collaboratorId", placeOrderModel.CollaboratorId);
                command.Parameters.AddWithValue("@p_productid", placeOrderModel.ProductId);
                command.Parameters.AddWithValue("@p_value", placeOrderModel.Value);
                command.Parameters.AddWithValue("@p_amount", placeOrderModel.Amount);
                command.Parameters.AddWithValue("@p_payed", placeOrderModel.Payed);

                var result = (string)await command.ExecuteScalarAsync();
                Console.WriteLine("JSON từ database: " + result);

                // bỏ qua phân biệt tên thuộc tính khớp chính xác và phân biệt chữ hoa/chữ thường
                var options = new JsonSerializerOptions
                {
                    PropertyNameCaseInsensitive = true
                };
                // Phân tích JSON trả về thành object
                var orderResult = System.Text.Json.JsonSerializer.Deserialize<OrderResultModel>(result, options);
                if (orderResult == null)
                {
                    throw new Exception("Không thể phân tích kết quả trả về từ cơ sở dữ liệu.");
                }
                return orderResult;

            }
            catch (Exception ex)
            {
                return new OrderResultModel
                {
                    Message = $"Lỗi khi xử lý: {ex.Message}",
                    OrderId = null
                };
            }
            finally
            {
                await connection.CloseAsync();
            }
        }

        public async Task<string> CaculateShareCommissionAsync(CommissionModel shareCommissionModel)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();

            try
            {
                using var command = connection.CreateCommand();
                command.CommandText = @"SELECT * FROM dbo.cal_share_commission(
                    @p_collaboratorId, 
                    @p_amountOrder 
                    )";

                command.Parameters.AddWithValue("@p_collaboratorId", shareCommissionModel.CollaboratorId);
                command.Parameters.AddWithValue("@p_amountOrder", shareCommissionModel.AmountOrder);

                var result = (string)await command.ExecuteScalarAsync();
                return result;

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
        // ---
        public async Task<string> CaculateGratitudeCommissionAsync(GratitudeCommissionModel gratitudeCommissionModel)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();
            using var transaction = await connection.BeginTransactionAsync();

            try
            {
                // Tạo danh sách OrderId theo cấp bậc
                var maxLevel = 21;
                var listOrdersId = new List<int>();
                var currentOrderId = gratitudeCommissionModel.OrderId;

                for (int i = 0; i < maxLevel; i++)
                {
                    currentOrderId = currentOrderId % 2 == 0
                        ? currentOrderId / 2
                        : (currentOrderId - 1) / 2;

                    if (currentOrderId >= 1)
                    {
                        listOrdersId.Add(currentOrderId);
                    }
                    else
                    {
                        break;
                    }
                }

                // Truy vấn tính hoa hồng tri ân
                var query = @"SELECT * FROM dbo.cal_gratitude_commission(
                            @p_collaboratorId,
                            @p_amountOrder,
                            @p_ordersId
                        );";

                var result = await connection.ExecuteScalarAsync<string>(query, new
                {
                    p_collaboratorId = gratitudeCommissionModel.CollaboratorId,
                    p_amountOrder = gratitudeCommissionModel.AmountOrder,
                    p_ordersId = listOrdersId.ToArray()
                }, transaction);

                await transaction.CommitAsync();
                return result;
            }
            catch (Exception ex)
            {
                await transaction.RollbackAsync();
                return $"Lỗi khi xử lý: {ex.Message}";
            }
        }


        public async Task<string> CaculateIntroCommissionAsync(CommissionModel introCommissionModel)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();

            try
            {
                using var command = connection.CreateCommand();
                command.CommandText = @"SELECT * FROM dbo.cal_intro_commission(
                    @p_collaboratorid, 
                    @p_amountOrder 
                    )";

                command.Parameters.AddWithValue("@p_collaboratorId", introCommissionModel.CollaboratorId);
                command.Parameters.AddWithValue("@p_amountOrder", introCommissionModel.AmountOrder);

                var result = (string)await command.ExecuteScalarAsync();
                return result;

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

        /*public async Task<string> CaculateLeaderCommissionAsync(CommissionModel introCommissionModel)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();

            try
            {
                using var command = connection.CreateCommand();
                command.CommandText = @"SELECT * FROM dbo.cal_leader_commission(
                    @p_collaboratorid, 
                    @p_amountOrder 
                    )";

                command.Parameters.AddWithValue("@p_collaboratorId", introCommissionModel.CollaboratorId);
                command.Parameters.AddWithValue("@p_amountOrder", introCommissionModel.AmountOrder);

                var result = (string)await command.ExecuteScalarAsync();
                return result;

            }
            catch (Exception ex)
            {
                return $"Lỗi khi xử lý: {ex.Message}";
            }
            finally
            {
                await connection.CloseAsync();
            }
        }*/

        //public async Task<string> CaculateLeaderCommissionAsync(CommissionModel introCommissionModel)
        //{
        //    var connectPostgres = new ConnectToPostgresql(_configuration);
        //    using var connection = await connectPostgres.CreateConnectionAsync();

        //    //await using var transaction = await connection.BeginTransactionAsync();
        //    try
        //    {
        //        // 1. Lấy danh sách các cộng tác viên và tổng số lượng theo Rank
        //        var collaborators = await connection.QueryAsync<CollaboratorCommission>(
        //            @"SELECT ""Id"", ""Rank"" 
        //              FROM dbo.""Collaborators"" 
        //              WHERE ""Rank"" IN ('V1', 'V2', 'V3', 'V4', 'V5') 
        //              ORDER BY ""Id"";"
        //        );

        //        if (!collaborators.Any())
        //        {
        //            return "Không có cộng tác viên phù hợp để tính hoa hồng.";
        //        }

        //        // Tính tổng số lượng từng Rank
        //        var totalByRank = new Dictionary<string, int>
        //        {
        //            { "V1", collaborators.Count(c => c.Rank == "V1") },
        //            { "V2", collaborators.Count(c => c.Rank == "V2") },
        //            { "V3", collaborators.Count(c => c.Rank == "V3") },
        //            { "V4", collaborators.Count(c => c.Rank == "V4") },
        //            { "V5", collaborators.Count(c => c.Rank == "V5") }
        //        };

        //        // 2. Tính hoa hồng theo từng Rank
        //        var baseCommission = 3450000 * introCommissionModel.AmountOrder;
        //        var commissionByRank = new Dictionary<string, decimal>
        //        {
        //            { "V1", Math.Round(baseCommission * 0.6M / totalByRank["V1"]) },
        //            { "V2", Math.Round(baseCommission * 0.3M / totalByRank["V2"]) },
        //            { "V3", Math.Round(baseCommission * 0.2M / totalByRank["V3"]) },
        //            { "V4", Math.Round(baseCommission * 0.1M / totalByRank["V4"]) },
        //            { "V5", Math.Round(baseCommission * 0.1M / totalByRank["V5"]) }
        //        };

        //        // 3. Duyệt qua từng cộng tác viên để cập nhật
        //        foreach (var collaborator in collaborators)
        //        {
        //            var rank = collaborator.Rank;
        //            if (!commissionByRank.ContainsKey(rank)) continue;

        //            var updateCommission = commissionByRank[rank];

        //            // Cập nhật ví
        //            await connection.ExecuteAsync(
        //                @"UPDATE dbo.""Wallets""
        //          SET ""Available"" = COALESCE(""Available"", 0) + @UpdateCommission
        //          WHERE ""CollaboratorId"" = @CollaboratorId AND ""WalletTypeEnums"" = 'Sale2';",
        //                new { UpdateCommission = updateCommission, CollaboratorId = collaborator.Id }
        //            );

        //            // Cập nhật ngưỡng đã nhận
        //            await connection.ExecuteAsync(
        //                @"UPDATE dbo.""Collaborators""
        //          SET ""Sale2Received"" = COALESCE(""Sale2Received"", 0) + @UpdateCommission
        //          WHERE ""Id"" = @CollaboratorId;",
        //                new { UpdateCommission = updateCommission, CollaboratorId = collaborator.Id }
        //            );

        //            // Gọi hàm `create_wallet_history` để ghi lịch sử
        //            await connection.ExecuteAsync(
        //                @"SELECT dbo.create_wallet_history(
        //                    @CollaboratorId,
        //                    'Sale2',
        //                    @Value,
        //                    @Note
        //                  );",
        //                new
        //                {
        //                    CollaboratorId = collaborator.Id,
        //                    Value = updateCommission,
        //                    Note = $"Hoa hồng lãnh đạo từ cộng tác viên EL{introCommissionModel.CollaboratorId} mua {introCommissionModel.AmountOrder} combo"
        //                }
        //            );
        //        }
        //        //await transaction.CommitAsync();
        //        return "Cập nhật hoa hồng lãnh đạo thành công.";
        //    }
        //    catch (Exception ex)
        //    {
        //        return $"Lỗi khi xử lý: {ex.Message}";
        //    }
        //    finally
        //    {
        //        await connection.CloseAsync();
        //    }
        //}

        public async Task<string> CaculateLeaderCommissionAsync(CommissionModel introCommissionModel)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();

            await using var transaction = await connection.BeginTransactionAsync();
            try
            {
                // 1. Lấy danh sách cộng tác viên
                var collaborators = await connection.QueryAsync<CollaboratorCommission>(
                    @"SELECT ""Id"", ""Rank"" 
                      FROM dbo.""Collaborators"" 
                      WHERE ""Rank"" IN ('V1', 'V2', 'V3', 'V4', 'V5') 
                      ORDER BY ""Id"" FOR UPDATE;"
                );

                if (!collaborators.Any())
                {
                    return "Không có cộng tác viên phù hợp để tính hoa hồng.";
                }

                // 2. Tính tổng số lượng từng Rank
                var totalByRank = collaborators
                    .GroupBy(c => c.Rank)
                    .ToDictionary(g => g.Key, g => g.Count());

                // 3. Tính hoa hồng cho từng Rank
                var baseCommission = 3450000 * introCommissionModel.AmountOrder;
                var commissionByRank = new Dictionary<string, decimal>
                {
                    { "V1", totalByRank.ContainsKey("V1") ? Math.Round(baseCommission * 0.6M / totalByRank["V1"]) : 0 },
                    { "V2", totalByRank.ContainsKey("V2") ? Math.Round(baseCommission * 0.3M / totalByRank["V2"]) : 0 },
                    { "V3", totalByRank.ContainsKey("V3") ? Math.Round(baseCommission * 0.2M / totalByRank["V3"]) : 0 },
                    { "V4", totalByRank.ContainsKey("V4") ? Math.Round(baseCommission * 0.1M / totalByRank["V4"]) : 0 },
                    { "V5", totalByRank.ContainsKey("V5") ? Math.Round(baseCommission * 0.1M / totalByRank["V5"]) : 0 }
                };

                // 4. Chuẩn bị dữ liệu cập nhật
                var updates = collaborators
                    .Where(c => commissionByRank.ContainsKey(c.Rank))
                    .Select(c => new
                    {
                        CollaboratorId = c.Id,
                        UpdateCommission = commissionByRank[c.Rank],
                        Note = $"Hoa hồng lãnh đạo từ cộng tác viên EL{introCommissionModel.CollaboratorId} mua {introCommissionModel.AmountOrder} combo"
                    }).ToList();

                if (!updates.Any())
                {
                    return "Không có cập nhật nào được thực hiện.";
                }

                // 5. Cập nhật ví và ngưỡng nhận
                await connection.ExecuteAsync(
                    @"UPDATE dbo.""Wallets""
                      SET ""Available"" = COALESCE(""Available"", 0) + @UpdateCommission
                      WHERE ""CollaboratorId"" = @CollaboratorId AND ""WalletTypeEnums"" = 'Sale2';
      
                      UPDATE dbo.""Collaborators""
                      SET ""Sale2Received"" = COALESCE(""Sale2Received"", 0) + @UpdateCommission
                      WHERE ""Id"" = @CollaboratorId;",
                    updates, transaction
                );

                // 6. Gọi `create_wallet_history` để ghi lịch sử
                await connection.ExecuteAsync(
                    @"SELECT dbo.create_wallet_history(
                        @CollaboratorId,
                        'Sale2',
                        @Value,
                        @Note
                      );",
                    updates.Select(u => new
                    {
                        u.CollaboratorId,
                        Value = u.UpdateCommission,
                        u.Note
                    }), transaction
                );

                await transaction.CommitAsync();
                return "Cập nhật hoa hồng lãnh đạo thành công.";
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

        public async Task<DataTable> ExportExcelOrderInfoDatatable(CollaboratorMemberManagerModel model)
        {
            DataTable dataTable = new DataTable();
            dataTable.Columns.Add("DeliveryDate", typeof(DateTime));
            dataTable.Columns.Add("Name", typeof(string));
            dataTable.Columns.Add("Address", typeof(string));
            dataTable.Columns.Add("Mobile", typeof(string));

            var connectPostgres = new ConnectToPostgresql(_configuration);

            using (var conn = await connectPostgres.CreateConnectionAsync())
            {
                using (var command = new NpgsqlCommand("SELECT * FROM dbo.get_order_info(@StartDate, @EndDate)", conn))
                {
                    command.Parameters.AddWithValue("@StartDate", model.StartDate?.ToString("yyyy-MM-dd") ?? (object)DBNull.Value);
                    command.Parameters.AddWithValue("@EndDate", model.EndDate?.ToString("yyyy-MM-dd") ?? (object)DBNull.Value);
                    command.CommandTimeout = 400;

                    using (var adapter = new NpgsqlDataAdapter(command))
                    {
                        adapter.Fill(dataTable);
                    }
                }

                await conn.CloseAsync();
            }
            if (dataTable.Columns.Contains("OrderId"))
            {
                dataTable.Columns.Remove("OrderId");
            }
            if (dataTable.Columns.Contains("CollaboratorId"))
            {
                dataTable.Columns.Remove("CollaboratorId");
            }
            if (dataTable.Columns.Contains("TotalCount"))
            {
                dataTable.Columns.Remove("TotalCount");
            }
            return dataTable;
        }

        public async Task<MemoryStream> ExportExcelOrderInfo(CollaboratorMemberManagerModel model)
        {
            var exportFile = new MemoryStream();

            #region Call data API
            var collaborators = await ExportExcelOrderInfoDatatable(model);
            #endregion

            #region Export Excel from template
            // Đường dẫn tới file template
            string templatePath = Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), "wwwroot", "template", "Export_Order.xlsx");

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
    }
}

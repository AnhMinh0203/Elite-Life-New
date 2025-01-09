using Dapper;
using Elite_life_datacontext.DataBase;
using Elite_life_datacontext.Dto;
using Elite_life_datacontext.Model;
using Elite_life_repository.Interfaces;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

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
        // Xử lý ngưỡng
        public async Task<decimal> ProccessThresholdAsync(int customerId, decimal sharePerCustomer, string walletType)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();

            try
            {
                string sql = "SELECT dbo.proccess_threshold(@customerid, @sharepercustomer, @wallettype)";

                // Tham số truyền vào hàm
                var parameters = new
                {
                    customerid = customerId,
                    sharepercustomer = sharePerCustomer,
                    wallettype = walletType
                };

                decimal result = await connection.ExecuteScalarAsync<decimal>(sql, parameters);

                return result;
            }
            catch (Exception ex)
            {
                Console.Error.WriteLine($"Error in ProccessThresholdAsync: {ex.Message}");
                throw;
            }
            finally
            {
                await connection.CloseAsync();
            }
        }
        // Đồng chia dùng Dapper
        /*public async Task<string> CaculateShareCommissionAsync(CommissionModel shareCommissionModel)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();

            try
            {

                // 1. Tính tổng hoa hồng
                decimal totalCommission = 517500 * shareCommissionModel.AmountOrder;

                // 2. Lấy danh sách khách hàng đủ điều kiện
                var eligibleCustomers = await connection.QueryAsync<int>(
                    @"SELECT DISTINCT ""CollaboratorId""
                      FROM dbo.""Orders""
                      WHERE ""CollaboratorId"" < @CollaboratorId",
                new { CollaboratorId = shareCommissionModel.CollaboratorId });

                if (!eligibleCustomers.Any())
                {
                    return "Lỗi: Không có khách hàng đủ điều kiện để chia hoa hồng.";
                }

                // 3. Tính số tiền chia cho mỗi khách hàng
                decimal sharePerCustomer = Math.Round(totalCommission / eligibleCustomers.Count(), 2);

                // 4. Lặp qua từng khách hàng để xử lý ví
                foreach (var customerId in eligibleCustomers)
                {
                    // Kiểm tra ví có tồn tại hay không
                    bool walletExists = await connection.ExecuteScalarAsync<bool>(
                        @"SELECT EXISTS (
                        SELECT 1 
                        FROM dbo.""Wallets""
                        WHERE ""CollaboratorId"" = @CustomerId AND ""WalletTypeEnums"" = 'CustomerShare'
                      )",
                        new { CustomerId = customerId });

                    if (!walletExists)
                    {
                        // Tạo ví mới nếu chưa tồn tại
                        await connection.ExecuteAsync(
                          @"INSERT INTO dbo.""Wallets"" 
                          (""CollaboratorId"", ""WalletTypeEnums"", ""Available"")
                          VALUES (@CustomerId, 'CustomerShare', @SharePerCustomer)",
                                new { CustomerId = customerId, SharePerCustomer = sharePerCustomer });
                    }
                    else
                    {
                        decimal updatedSharePerCustomer = await ProccessThresholdAsync(customerId, sharePerCustomer, "CustomerShare");
                        // Cập nhật số dư nếu ví đã tồn tại
                        if (updatedSharePerCustomer > 0)
                        {

                            // Cập nhật số dư ví và ngưỡng nhận
                            await connection.ExecuteAsync(
                                @"UPDATE dbo.""Wallets""
                              SET ""Available"" = ""Available"" + @UpdatedSharePerCustomer
                              WHERE ""CollaboratorId"" = @CustomerId AND ""WalletTypeEnums"" = 'CustomerShare';
                          
                              UPDATE dbo.""Collaborators""
                              SET ""ShareReceived"" = ""ShareReceived"" + @UpdatedSharePerCustomer
                              WHERE ""Id"" = @CustomerId;",
                                new { CustomerId = customerId, UpdatedSharePerCustomer = updatedSharePerCustomer });
                        }
                    }

                    // Thêm lịch sử giao dịch
                    CreateWalletHistory createWalletHistory = new CreateWalletHistory();
                    createWalletHistory.CollaboratorId = customerId;
                    createWalletHistory.WalletType = "CustomerShare";
                    createWalletHistory.Value = sharePerCustomer;
                    createWalletHistory.Note = $"Đồng chia từ cộng tác viên EL{shareCommissionModel.CollaboratorId} cho {eligibleCustomers.Count()} khách hàng";

                    await CreateWalletHistoryAsync(createWalletHistory);
                }

                return $"Tổng số tiền hoa hồng {totalCommission} được chia đều cho {eligibleCustomers.Count()} khách hàng, mỗi người nhận {sharePerCustomer}.";


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
        // Đồng chia call function
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

        public async Task<string> CaculateGratitudeCommissionAsync(GratitudeCommissionModel gratitudeCommissionModel)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();

            var maxLevel = 21;
            List<int> listOrdersId = new();
            for (int i = 0; i < maxLevel; i++)
            {
                if (gratitudeCommissionModel.OrderId % 2 != 0)
                {
                    gratitudeCommissionModel.OrderId = (gratitudeCommissionModel.OrderId - 1) / 2;
                }
                else
                {
                    gratitudeCommissionModel.OrderId = gratitudeCommissionModel.OrderId / 2;
                }

                if (gratitudeCommissionModel.OrderId >= 1)
                {
                    listOrdersId.Add(gratitudeCommissionModel.OrderId);
                }
                else
                {
                    break;
                }
            }

            try
            {
                using var command = connection.CreateCommand();
                command.CommandText = @"SELECT * FROM dbo.cal_gratitude_commission(
                    @p_collaboratorId,
                    @p_amountOrder,
                    @p_ordersId
                    )";

                command.Parameters.AddWithValue("@p_collaboratorId", gratitudeCommissionModel.CollaboratorId);
                command.Parameters.AddWithValue("@p_amountOrder", gratitudeCommissionModel.AmountOrder);
                command.Parameters.AddWithValue("@p_ordersId", listOrdersId.ToArray());

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

        public async Task<string> CaculateLeaderCommissionAsync(CommissionModel introCommissionModel)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();

            //await using var transaction = await connection.BeginTransactionAsync();
            try
            {
                // 1. Lấy danh sách các cộng tác viên và tổng số lượng theo Rank
                var collaborators = await connection.QueryAsync<CollaboratorCommission>(
                    @"SELECT ""Id"", ""Rank"" 
                      FROM dbo.""Collaborators"" 
                      WHERE ""Rank"" IN ('V1', 'V2', 'V3', 'V4', 'V5') 
                      ORDER BY ""Id"";"
                );

                if (!collaborators.Any())
                {
                    return "Không có cộng tác viên phù hợp để tính hoa hồng.";
                }

                // Tính tổng số lượng từng Rank
                var totalByRank = new Dictionary<string, int>
                {
                    { "V1", collaborators.Count(c => c.Rank == "V1") },
                    { "V2", collaborators.Count(c => c.Rank == "V2") },
                    { "V3", collaborators.Count(c => c.Rank == "V3") },
                    { "V4", collaborators.Count(c => c.Rank == "V4") },
                    { "V5", collaborators.Count(c => c.Rank == "V5") }
                };

                // 2. Tính hoa hồng theo từng Rank
                var baseCommission = 3450000 * introCommissionModel.AmountOrder;
                var commissionByRank = new Dictionary<string, decimal>
                {
                    { "V1", Math.Round(baseCommission * 0.6M / totalByRank["V1"]) },
                    { "V2", Math.Round(baseCommission * 0.3M / totalByRank["V2"]) },
                    { "V3", Math.Round(baseCommission * 0.2M / totalByRank["V3"]) },
                    { "V4", Math.Round(baseCommission * 0.1M / totalByRank["V4"]) },
                    { "V5", Math.Round(baseCommission * 0.1M / totalByRank["V5"]) }
                };

                // 3. Duyệt qua từng cộng tác viên để cập nhật
                foreach (var collaborator in collaborators)
                {
                    var rank = collaborator.Rank;
                    if (!commissionByRank.ContainsKey(rank)) continue;

                    var updateCommission = commissionByRank[rank];

                    // Cập nhật ví
                    await connection.ExecuteAsync(
                        @"UPDATE dbo.""Wallets""
                  SET ""Available"" = COALESCE(""Available"", 0) + @UpdateCommission
                  WHERE ""CollaboratorId"" = @CollaboratorId AND ""WalletTypeEnums"" = 'Sale2';",
                        new { UpdateCommission = updateCommission, CollaboratorId = collaborator.Id }
                    );

                    // Cập nhật ngưỡng đã nhận
                    await connection.ExecuteAsync(
                        @"UPDATE dbo.""Collaborators""
                  SET ""Sale2Received"" = COALESCE(""Sale2Received"", 0) + @UpdateCommission
                  WHERE ""Id"" = @CollaboratorId;",
                        new { UpdateCommission = updateCommission, CollaboratorId = collaborator.Id }
                    );

                    // Gọi hàm `create_wallet_history` để ghi lịch sử
                    await connection.ExecuteAsync(
                        @"SELECT dbo.create_wallet_history(
                            @CollaboratorId,
                            'Sale2',
                            @Value,
                            @Note
                          );",
                        new
                        {
                            CollaboratorId = collaborator.Id,
                            Value = updateCommission,
                            Note = $"Hoa hồng lãnh đạo từ cộng tác viên EL{introCommissionModel.CollaboratorId} mua {introCommissionModel.AmountOrder} combo"
                        }
                    );
                }
                //await transaction.CommitAsync();
                return "Cập nhật hoa hồng lãnh đạo thành công.";
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

        public async Task<List<OrderHistoryModel>> GetOrderHistoryAsync(int collaboratorId)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();

            try
            {
                // Define the SQL query
                var query = @"SELECT ""CreatedAt"", ""Payed"", ""Amount"" 
                      FROM dbo.""Orders"" 
                      WHERE ""CollaboratorId"" = @CollaboratorId";

                // Use Dapper's QueryAsync method to fetch the data
                var orderHistory = await connection.QueryAsync<OrderHistoryModel>(query, new { CollaboratorId = collaboratorId });

                // Convert the IEnumerable result to a List
                return orderHistory.ToList();
            }
            catch (Exception ex)
            {
                throw new Exception($"Lỗi: {ex.Message}", ex);
            }
            finally
            {
                await connection.CloseAsync();
            }
        }

        public async Task<List<string>> GetWarehouseAsync()
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();

            try
            {
                var result = await connection.QueryAsync<string>(@"SELECT ""Name""  FROM dbo.""Warehouse""");

                // Trả về danh sách tên kho
                return result.ToList();

            }
            catch (Exception ex)
            {
                Console.WriteLine($"Lỗi khi xử lý: {ex.Message}");
                return new List<string> { $"Lỗi khi xử lý: {ex.Message}" };
            }
            finally
            {
                await connection.CloseAsync();
            }
        }

        /*        public async Task<string> CheckRankAsync (int collaboratorId)
                {
                    var connectPostgres = new ConnectToPostgresql(_configuration);
                    using var connection = await connectPostgres.CreateConnectionAsync();

                    try
                    {
                        var query = @"Select * from dbo.check_rank (@collaboratorId)";
                        var result = await connection.ExecuteScalarAsync<string>(query, new { CollaboratorId = collaboratorId });

                        return result;
                    }
                    catch (Exception ex)
                    {
                        throw new Exception($"Lỗi: {ex.Message}", ex);
                    }
                    finally
                    {
                        await connection.CloseAsync();
                    }
                }*/

        // Check rank - logic backend
        public async Task<string> CheckRankAsync(int collaboratorId)
        {
            var connectPostgres = new ConnectToPostgresql(_configuration);
            using var connection = await connectPostgres.CreateConnectionAsync();

            try
            {
                // Lấy ParentCode của cộng tác viên hiện tại
                var parentId = await connection.QuerySingleOrDefaultAsync<int?>(
                    "SELECT \"ParentId\" FROM dbo.\"Collaborators\" WHERE \"Id\" = @CollaboratorId",
                    new { CollaboratorId = collaboratorId });

                if (!parentId.HasValue)
                {
                    return "No Parent"; // Nếu không có ParentCode, trả về "No Parent"
                }

                // Lấy Rank hiện tại của Parent
                var parentRank = await connection.QuerySingleOrDefaultAsync<string>(
                    "SELECT \"Rank\" FROM dbo.\"Collaborators\" WHERE \"Id\" = @ParentId",
                    new { ParentId = parentId });

                // Xác định ngưỡng rank cần kiểm tra
                int? rankThreshold = null;
                switch (parentRank)
                {
                    case "None":
                        rankThreshold = null;
                        break;
                    case "V":
                        rankThreshold = 1;
                        break;
                    case "V1":
                        rankThreshold = 2;
                        break;
                    case "V2":
                        rankThreshold = 3;
                        break;
                    case "V3":
                        rankThreshold = 4;
                        break;
                    case "V4":
                        rankThreshold = 5;
                        break;
                }

                // Lấy danh sách F1
                var f1Ids = await connection.QueryAsync<int>(
                    "SELECT \"Id\" FROM dbo.\"Collaborators\" WHERE \"ParentId\" = @ParentId",
                    new { ParentId = parentId });

                // Nếu không có F1 hoặc ít hơn 3 F1, trả về lỗi
                if (f1Ids == null || f1Ids.Count() < 3)
                {
                    return "Lỗi: Chưa đủ điều kiện thăng hạng";
                }

                // Trường hợp Rank của Parent là 'None'
                string newRank = null;
                if (parentRank == "None")
                {
                    // Tính tổng doanh thu từ F1
                    var totalPayed = await connection.QuerySingleOrDefaultAsync<decimal>(
                        "SELECT COALESCE(SUM(\"Payed\"), 0) FROM dbo.\"Orders\" WHERE \"CollaboratorId\" = ANY(@F1Ids)",
                        new { F1Ids = f1Ids });

                    if (totalPayed >= 10350000)
                    {
                        newRank = "V";
                    }
                    else
                    {
                        return "No Rank Update";
                    }
                }
                else
                {
                    // Duyệt qua từng F1 và lấy các rank con cháu
                    var mergedRanks = new List<string>();

                    foreach (var f1Id in f1Ids)
                    {
                        var ranks = await connection.QueryAsync<string>(
                            "SELECT DISTINCT \"rank\" FROM dbo.get_collaborators_with_level(@F1Id)",
                            new { F1Id = f1Id });

                        mergedRanks.AddRange(ranks);
                    }

                    // Đếm số rank >= rankThreshold trong mảng mergedRanks
                    var rankCount = mergedRanks.Count(rank =>
                    {
                        int rankValue = 0;
                        switch (rank)
                        {
                            case "V":
                                rankValue = 1;
                                break;
                            case "V1":
                                rankValue = 2;
                                break;
                            case "V2":
                                rankValue = 3;
                                break;
                            case "V3":
                                rankValue = 4;
                                break;
                            case "V4":
                                rankValue = 5;
                                break;
                        }
                        return rankValue >= rankThreshold;
                    });

                    // Tổng thu nhập từ F1
                    var totalPayedFromF1 = await connection.QuerySingleOrDefaultAsync<decimal>(
                        "SELECT COALESCE(SUM(\"Payed\"), 0) FROM dbo.\"Orders\" WHERE \"CollaboratorId\" = ANY(@F1Ids)",
                        new { F1Ids = f1Ids });

                    if (rankCount >= 3 && totalPayedFromF1 >= 69000000)
                    {
                        switch (rankThreshold)
                        {
                            case 1:
                                newRank = "V1";
                                break;
                            case 2:
                                newRank = "V2";
                                break;
                            case 3:
                                newRank = "V3";
                                break;
                            case 4:
                                newRank = "V4";
                                break;
                            case 5:
                                newRank = "V5";
                                break;
                        }
                    }
                    else
                    {
                        return "Lỗi: Chưa đủ điều kiện thăng hạng";
                    }
                }

                // Cập nhật rank mới cho Parent nếu cần
                if (newRank != null && newRank != parentRank)
                {
                    // Cập nhật Rank cho Parent
                    await connection.ExecuteAsync(
                        "UPDATE dbo.\"Collaborators\" SET \"Rank\" = @NewRank WHERE \"Id\" = @ParentId",
                        new { NewRank = newRank, ParentId = parentId });

                    // Xác định trạng thái thay đổi rank
                    short? newRankStatus = null;
                    switch (newRank)
                    {
                        case "V":
                            newRankStatus = 0;
                            break;
                        case "V1":
                            newRankStatus = 1;
                            break;
                        case "V2":
                            newRankStatus = 2;
                            break;
                        case "V3":
                            newRankStatus = 3;
                            break;
                        case "V4":
                            newRankStatus = 4;
                            break;
                        case "V5":
                            newRankStatus = 5;
                            break;
                    }

                    short? parentRankStatus = null;
                    switch (parentRank)
                    {
                        case "None":
                            parentRankStatus = -1;
                            break;
                        case "V":
                            parentRankStatus = 0;
                            break;
                        case "V1":
                            parentRankStatus = 1;
                            break;
                        case "V2":
                            parentRankStatus = 2;
                            break;
                        case "V3":
                            parentRankStatus = 3;
                            break;
                        case "V4":
                            parentRankStatus = 4;
                            break;
                        case "V5":
                            parentRankStatus = 5;
                            break;
                    }

                    // Xác định trạng thái thay đổi rank
                    var rankStatus = newRankStatus > parentRankStatus ? 1 :
                                     newRankStatus < parentRankStatus ? -1 : 0;

                    // Cập nhật RankStatus
                    await connection.ExecuteAsync(
                        "UPDATE dbo.\"Collaborators\" SET \"RankStatus\" = @RankStatus WHERE \"Id\" = @ParentId",
                        new { RankStatus = rankStatus, ParentId = parentId });

                    return "Cập nhật rank thành công";
                }

                return "Lỗi: Chưa đủ điều kiện thăng hạng";
            }
            catch (Exception ex)
            {
                throw new Exception($"Lỗi: {ex.Message}", ex);
            }
            finally
            {
                await connection.CloseAsync();
            }
        }



    }
}

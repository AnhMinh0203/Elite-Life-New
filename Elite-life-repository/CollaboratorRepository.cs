﻿using Dapper;
using Elite_life_datacontext.DataBase;
using Elite_life_datacontext.Dto;
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
    }
}
using AutoMapper;
using Elite_life.Startups;
using Elite_life_datacontext.DataBase;
using System;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCustomService(builder.Configuration);
/*builder.Services.AddStartupService(builder.Configuration);*/
builder.Services.AddDebugCustomService(builder.Configuration);

// AutoMapper
var config = new MapperConfiguration(cfg =>
{
    cfg.AddProfile(new AutoMapperProfile());
});
var mapper = config.CreateMapper();
builder.Services.AddSingleton(mapper);

var app = builder.Build();


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
/*builder.Services.AddTransient<ConnectToPostgresql>();*/

app.Services.GetRequiredService<ILoggerFactory>();
/*
app.UseStartupService(builder.Configuration);
app.UseProductionStartupService(builder.Configuration);*/
app.UseCustomService(builder.Configuration);

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

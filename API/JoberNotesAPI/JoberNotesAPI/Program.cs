using JoberNotesAPI.Models;
using JoberNotesAPI.repository;
using JoberNotesAPI.Services;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using System;
using System.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.Configure<JoberNotesDatabaseSettings>(builder.Configuration.GetSection("JoberNotesDatabase"));

//Configure MongoDB as single client instance
builder.Services.AddSingleton<IMongoClient>((serviceProvider) => {
    var config = serviceProvider.GetRequiredService<IOptions<JoberNotesDatabaseSettings>>();
    return new MongoClient(config.Value.ConnectionString); 
});

builder.Services.AddScoped<JobRepository>();
builder.Services.AddScoped<JobsService>();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var specificOrigins = "specificOrigins";
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: specificOrigins,
                      policy =>
                      {
                          policy.WithOrigins("http://localhost:3000");
                      });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseCors(specificOrigins);

app.MapGet("api/jobs", async (JobsService jobsService) => 
{
    var jobs = await jobsService.GetAllAsync();

    return jobs;
});

app.Run();
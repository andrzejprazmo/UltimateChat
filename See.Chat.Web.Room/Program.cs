using Microsoft.AspNetCore.Mvc;

var webApplicationOptions = new WebApplicationOptions
{
    Args = args,
    ApplicationName = typeof(Program).Assembly.FullName,
    ContentRootPath = Directory.GetCurrentDirectory(),
    WebRootPath = "wwwroot/browser"
};
var builder = WebApplication.CreateBuilder(webApplicationOptions);

builder.Services.AddAuthorization();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseStaticFiles();
app.UseRouting();
app.UseAuthorization();

app.MapGet("/api/config", ([FromServices]IConfiguration config) => new 
{ 
    HubUrl = config["Hub:Url"],
});

app.MapFallbackToFile("index.html");

app.Run();

using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using See.Chat.HubService.Hubs;
using See.Chat.HubService.Infrastructure;
using Serilog;

namespace See.Chat.HubService
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            builder.Host.UseSerilog((context, configuration) => configuration.ReadFrom.Configuration(context.Configuration));

            // Add services to the container.
            builder.Services.AddAuthorization();

            builder.Services.AddSignalR();
            builder.Services.AddCors();
            builder.Services.AddHealthChecks();
            builder.Services.AddSingleton<ChatRoomsProvider>();

            var app = builder.Build();
            
            var allowedClients = builder.Configuration.GetSection("AllowedClients").Get<List<string>>() ?? [];
            app.UseCors(config => config
               .WithOrigins(allowedClients.ToArray())
               .AllowAnyMethod()
               .AllowAnyHeader()
               .AllowCredentials());

            app.UseAuthorization();
            app.MapGet("/api/rooms", ([FromServices] ChatRoomsProvider connectionProvider) => Results.Ok(connectionProvider.GetChatRooms()));
            app.MapGet("/api/room/{connectionId}", ([FromServices] ChatRoomsProvider connectionProvider, string connectionId) => 
            { 
                var room = connectionProvider.GetChatRooms().FirstOrDefault(c => c.ConnectionId == connectionId);
                return room != null ? Results.Ok(room) : Results.NotFound();
            });
            app.UseHealthChecks("/healthz");
            app.MapHub<VideoChatHub>("/chat");


            app.Run();
        }
    }
}

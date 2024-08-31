using See.Chat.HubService.Hubs;

namespace See.Chat.HubService
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddAuthorization();

            builder.Services.AddSignalR();
            builder.Services.AddCors();
            builder.Services.AddHealthChecks();

            var app = builder.Build();

            app.UseHttpsRedirection();
            app.UseAuthorization();
            app.UseHealthChecks("/healthz");
            app.MapHub<VideoChatHub>("/chat");

            app.Run();
        }
    }
}

using Microsoft.AspNetCore.SignalR;
using See.Chat.HubService.Infrastructure;

namespace See.Chat.HubService.Hubs
{
    public class VideoChatHub : Hub
    {
        private readonly ChatRoomsProvider _connectionProvider;
        private readonly ILogger<VideoChatHub> _logger;
        public VideoChatHub(ChatRoomsProvider connectionProvider, ILogger<VideoChatHub> logger)
        {
            _connectionProvider = connectionProvider ?? throw new ArgumentNullException(nameof(connectionProvider));
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        }
        public async Task NewChatRoom(string chatRoom)
        {
            await Clients.All.SendAsync("NewChatRoom", chatRoom, Context.ConnectionId);
            _connectionProvider.AddChatRoom(Context.ConnectionId, chatRoom);
            _logger.LogDebug("New chat room created: {chatRoom}", chatRoom);
        }

        public async Task RequestConnection(string userName, string connectionId)
        {
            await Clients.Client(connectionId).SendAsync("RequestConnection", userName, Context.ConnectionId);
        }

        public async Task AcceptConnection(string connectionId)
        {
            await Clients.Client(connectionId).SendAsync("AcceptConnection", Context.ConnectionId);
        }

        public async Task SendVideo(string connectionId, string signal)
        {
            await Clients.Client(connectionId).SendAsync("SendVideo", Context.ConnectionId, signal);
        }
    }
}

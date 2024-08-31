using Microsoft.AspNetCore.SignalR;

namespace See.Chat.HubService.Hubs
{
    public class VideoChatHub : Hub
    {
        public async Task NewChatRoom(string chatRoom)
        {
            await Clients.All.SendAsync("NewChatRoom", chatRoom, Context.ConnectionId);
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

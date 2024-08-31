using Microsoft.AspNetCore.SignalR;

namespace See.Chat.HubService.Hubs
{
    public class VideoChatHub : Hub
    {
        public async Task NewChatRoom(string chatRoom)
        {
            await Clients.All.SendAsync("NewChatRoom", chatRoom, Context.ConnectionId);
        }

        public async Task SendVideo(string connectionId, string signal)
        {
            await Clients.Client(connectionId).SendAsync("SendVideo", Context.ConnectionId, signal);
        }
    }
}

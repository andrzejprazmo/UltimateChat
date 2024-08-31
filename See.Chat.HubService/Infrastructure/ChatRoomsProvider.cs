namespace See.Chat.HubService.Infrastructure
{
    public record ChatRoom(string ConnectionId, string UserName);
    public class ChatRoomsProvider
    {
        private readonly List<ChatRoom> _connections = new();

        public IReadOnlyList<ChatRoom> GetChatRooms()
        {
            return _connections;
        }

        public void AddChatRoom(string connectionId, string userName)
        {
            _connections.Add(new ChatRoom(connectionId, userName));
        }

        public void RemoveChatRoom(string connectionId)
        {
            _connections.RemoveAll(c => c.ConnectionId == connectionId);
        }
    }
}

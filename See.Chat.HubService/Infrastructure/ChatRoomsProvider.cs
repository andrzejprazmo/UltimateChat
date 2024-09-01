namespace See.Chat.HubService.Infrastructure
{
    public record ChatRoom(string ConnectionId, string RoomName);
    public class ChatRoomsProvider
    {
        private readonly List<ChatRoom> _connections = new();

        public IReadOnlyList<ChatRoom> GetChatRooms()
        {
            return _connections;
        }

        public void AddChatRoom(string connectionId, string chatRoomName)
        {
            _connections.Add(new ChatRoom(connectionId, chatRoomName));
        }

        public void RemoveChatRoom(string connectionId)
        {
            _connections.RemoveAll(c => c.ConnectionId == connectionId);
        }
    }
}

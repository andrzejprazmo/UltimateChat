import { Component, inject } from '@angular/core';
import { ChatRoomService } from '../../services/chat-room.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ChatRoomData, UserInfo } from '@shared/types/shared.types';
import { ConnectionService } from '@shared/services/connection.service';
import { StreamService } from '@shared/services/stream.service';

@Component({
  selector: 'app-chat-room',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './chat-room.component.html',
  styleUrl: './chat-room.component.css',
})
export default class ChatRoomComponent {
  connectionService = inject(ConnectionService);
  streamService = inject(StreamService);

  chatRoomService = inject(ChatRoomService);
  route = inject(ActivatedRoute);

  chatRoom!: ChatRoomData;
  currentUser: UserInfo = { userName: 'Test', connectionId: '' };

  ngOnInit() {
    this.chatRoom = this.route.snapshot.data['chatRoom'] as ChatRoomData;
    if (this.chatRoom) {
      this.setEvents();
    }
  }

  setEvents() {
    this.connectionService.initializeConnection().then(() => {
      this.connectionService.connectionHub.on("AcceptConnection", (userName, connectionId) => {
        this.currentUser = { userName, connectionId };
      });

      this.connectionService.connectionHub.invoke("RequestConnection", this.currentUser.userName, this.chatRoom.connectionId).then(() => {

      });
    });
  }
}

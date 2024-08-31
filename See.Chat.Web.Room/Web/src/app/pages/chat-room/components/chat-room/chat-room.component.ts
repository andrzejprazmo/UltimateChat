import { Component, inject } from '@angular/core';
import { ChatRoomForm, ChatRoomModel } from '../../types/chat-room.types';
import { ChatRoomService } from '../../services/chat-room.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ConnectionService } from '@shared/services/connection.service';
import { CommonModule } from '@angular/common';
import { StreamService } from '@shared/services/stream.service';
import { PeerData, SignalInfo, UserInfo } from '@shared/types/shared.types';

enum ChatRoomStatus {
  None,
  Registered,
  Connected
}

@Component({
  selector: 'app-chat-room',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './chat-room.component.html',
  styleUrl: './chat-room.component.css'
})
export default class ChatRoomComponent {
  connectionService = inject(ConnectionService);
  streamService = inject(StreamService);
  chatRoomService = inject(ChatRoomService);
  form!: ChatRoomForm;
  model!: ChatRoomModel;
  queue: UserInfo[] = [];
  videoStream!: MediaStream;

  chatRoomStatus: ChatRoomStatus = ChatRoomStatus.None;
  ChatRoomStatus = ChatRoomStatus;

  ngOnInit() {
    this.connectionService.initializeConnection();
    this.form = this.chatRoomService.buildChatRoomForm({
      chatRoom: '',
      connectionId: ''
    })
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.connectionService.connectionHub.invoke("NewChatRoom", this.form.controls.chatRoom.value).then(() => {
      this.setEvents();
      this.chatRoomStatus = ChatRoomStatus.Registered;
    });
  }

  setEvents() {
    this.connectionService.connectionHub.on("RequestConnection", (userName, connectionId) => {
      this.queue.push({ userName, connectionId });
    });
    this.connectionService.signal$.subscribe((signalData: SignalInfo) => {
      this.streamService.signalPeer(signalData.connectionId, signalData.signal, this.videoStream);
    })
    this.streamService.onSignalToSend$.subscribe((data: PeerData) => {
      this.connectionService.sendSignalToUser(data.id, data.data);
    })
  }
}

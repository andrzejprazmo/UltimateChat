import { Component, inject } from '@angular/core';
import { ChatRoomForm, ChatRoomModel } from '../../types/chat-room.types';
import { ChatRoomService } from '../../services/chat-room.service';

@Component({
  selector: 'app-chat-room',
  standalone: true,
  imports: [],
  templateUrl: './chat-room.component.html',
  styleUrl: './chat-room.component.css'
})
export default class ChatRoomComponent {
  chatRoomService = inject(ChatRoomService);
  form!: ChatRoomForm;
  model!: ChatRoomModel;

  ngOnInit() {
    this.form = this.chatRoomService.buildChatRoomForm({
      chatRoom: '',
      connectionId: ''
    })
  }
}

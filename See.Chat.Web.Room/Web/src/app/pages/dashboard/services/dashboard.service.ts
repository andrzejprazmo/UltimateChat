import { Injectable } from '@angular/core';
import { ChatRoomForm, ChatRoomModel } from '../types/dashboard.types';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  buildChatRoomForm(model: ChatRoomModel): ChatRoomForm {
    return new FormGroup({
      chatRoom: new FormControl(model.chatRoom, [Validators.required]),
    });
  }
  
}

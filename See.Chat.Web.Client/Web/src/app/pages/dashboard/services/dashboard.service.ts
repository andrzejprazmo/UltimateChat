import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { APPLICATION_CONFIG, ChatRoomData } from '@shared/types/shared.types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  http = inject(HttpClient);
  config = inject(APPLICATION_CONFIG);

  getChatRooms(): Observable<ChatRoomData[]> {
    const url = `${this.config.hubUrl}/api/rooms`;
    return this.http.get<ChatRoomData[]>(url);
  }
}

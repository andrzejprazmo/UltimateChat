import { Component, inject } from '@angular/core';
import { ConnectionService } from '@shared/services/connection.service';
import { StreamService } from '@shared/services/stream.service';
import { DashboardService } from '../../services/dashboard.service';
import { ChatRoomData } from '@shared/types/shared.types';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export default class DashboardComponent {
  connectionService = inject(ConnectionService);
  streamService = inject(StreamService);
  dashboardService = inject(DashboardService);

  chatRooms: ChatRoomData[] = [];

  ngOnInit() {
    this.dashboardService.getChatRooms().subscribe({
      next: rooms => {
        this.chatRooms = rooms;
        this.setEvents();
      }
    });
  }

  setEvents() {
    this.connectionService.initializeConnection().then(() => {
      this.connectionService.connectionHub.on("NewChatRoom", (roomName, connectionId) => {
        this.chatRooms.push({ connectionId, roomName });
      });
  
    });
  }

  ngOnDestroy() {
    this.connectionService.connectionHub.off("NewChatRoom");
  }
}

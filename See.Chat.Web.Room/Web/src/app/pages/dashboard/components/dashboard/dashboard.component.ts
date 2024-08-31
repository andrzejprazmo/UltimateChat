import { Component, inject } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { ChatRoomForm } from '../../types/dashboard.types';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export default class DashboardComponent {
  dashboardService = inject(DashboardService);
  form!: ChatRoomForm;

  ngOnInit() {
    this.form = this.dashboardService.buildChatRoomForm({
      chatRoom: '',
      connectionId: ''
    })
  }
}

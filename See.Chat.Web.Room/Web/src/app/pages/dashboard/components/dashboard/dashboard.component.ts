import { Component, inject } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export default class DashboardComponent {
  dashboardService = inject(DashboardService);

}

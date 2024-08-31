import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'dashboard', loadComponent: () => import('./pages/dashboard/components/dashboard/dashboard.component') },
    { path: 'chat-room', loadComponent: () => import('./pages/chat-room/components/chat-room/chat-room.component') },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];

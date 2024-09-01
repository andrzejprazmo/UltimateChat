import { Routes } from '@angular/router';
import { chatRoomResolver } from './pages/chat-room/resolvers/chat-room.resolver';

export const routes: Routes = [
    { path: 'dashboard', loadComponent: () => import('./pages/dashboard/components/dashboard/dashboard.component') },
    { path: 'chat-room/:id', loadComponent: () => import('./pages/chat-room/components/chat-room/chat-room.component'), resolve: { chatRoom: chatRoomResolver } },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];

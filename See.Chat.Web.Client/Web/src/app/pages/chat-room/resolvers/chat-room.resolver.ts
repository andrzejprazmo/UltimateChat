import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { APPLICATION_CONFIG, ChatRoomData } from '@shared/types/shared.types';
import { map } from 'rxjs';

export const chatRoomResolver: ResolveFn<ChatRoomData | null> = (route, state) => {
  const connectionId = route.params['id'];
  if (!connectionId) {
    return null;
  }
  const http = inject(HttpClient);
  const config = inject(APPLICATION_CONFIG);
  const url = `${config.hubUrl}/api/room/${connectionId}`;
  return http.get<ChatRoomData>(url).pipe(map(data => {
    return data;
  }));
};

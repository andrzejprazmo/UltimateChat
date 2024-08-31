import { InjectionToken } from "@angular/core";

export interface GlobalConfiguration {
    hubUrl: string,
}

export interface ChatRoomData {
    connectionId: string,
    chatRoom: string,
}
export interface SignalInfo {
    connectionId: string,
    signal: any;
}
export interface PeerData {
    id: string;
    data: any;
}
export interface UserInfo {
    userName: string;
    connectionId: string;
}

export const APPLICATION_CONFIG = new InjectionToken<GlobalConfiguration>('GlobalConfiguration');
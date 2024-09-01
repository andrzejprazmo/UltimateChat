import { Injectable, inject } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { Subject } from 'rxjs';
import { APPLICATION_CONFIG, GlobalConfiguration, SignalInfo, UserInfo } from '@shared/types/shared.types';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  appConfig: GlobalConfiguration = inject(APPLICATION_CONFIG);

  public connectionHub!: HubConnection

  // private elderArrived = new Subject<ElderData>();
  // public elderArrived$ = this.elderArrived.asObservable();

  private helloAnswer = new Subject<UserInfo>();
  public helloAnswer$ = this.helloAnswer.asObservable();

  private disconnectedPeer = new Subject<UserInfo>();
  public disconnectedPeer$ = this.disconnectedPeer.asObservable();

  private signal = new Subject<SignalInfo>();
  public signal$ = this.signal.asObservable();

  public initializeConnection(): Promise<void> {
    this.connectionHub = new HubConnectionBuilder()
      .withUrl(`${this.appConfig.hubUrl}/chat`)
      .build();

    this.connectionHub.on('SendVideo', (connectionId, signal) => {
      this.signal.next({ connectionId, signal });
    });

    return this.connectionHub.start();
  }

  public sendSignalToUser(connectionId: string, signal: string) {
    this.connectionHub.invoke('SendVideo', connectionId, signal);
  }
}

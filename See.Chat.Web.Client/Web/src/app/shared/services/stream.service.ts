import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { PeerData } from '@shared/types/shared.types';
import { Instance } from 'simple-peer';

declare var SimplePeer: any;

@Injectable({
  providedIn: 'root'
})
export class StreamService {

  private onSignalToSend = new Subject<PeerData>();
  public onSignalToSend$ = this.onSignalToSend.asObservable();
  
  private onStream = new Subject<PeerData>();
  public onStream$ = this.onStream.asObservable();
  
  private onConnect = new Subject<PeerData>();
  public onConnect$ = this.onConnect.asObservable();
  
  private onData = new Subject<PeerData>();
  public onData$ = this.onData.asObservable();
  
  public currentPeer!: Instance;
  
  public createPeer(stream: any, userId: string, initiator: boolean): Instance {
    const peer = new SimplePeer({ initiator, stream });
  
    peer.on('signal', data => {
      const stringData = JSON.stringify(data);
      this.onSignalToSend.next({ id: userId, data: stringData });
    });
  
    peer.on('stream', data => {
      console.log('on stream', data);
      this.onStream.next({ id: userId, data });
    });
  
    peer.on('connect', () => {
      this.onConnect.next({ id: userId, data: null });
    });
  
    peer.on('data', data => {
      this.onData.next({ id: userId, data });
    });
  
    return peer;
  }
  
  public signalPeer(userId: string, signal: string, stream: any) {
    const signalObject = JSON.parse(signal);
    if (this.currentPeer) {
      this.currentPeer.signal(signalObject);
    } else {
      this.currentPeer = this.createPeer(stream, userId, false);
      this.currentPeer.signal(signalObject);
    }
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientStateService {

  constructor() { }

  private clientSubject = new BehaviorSubject<string>('clientA');
  selectedClient$ = this.clientSubject.asObservable();

  setClient(client: string) {
    console.log('Client Selected: ', client);
    this.clientSubject.next(client);
  }

  // get client 
  getClient(): string {
    return this.clientSubject.value;
  }
}

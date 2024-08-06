import { Component } from '@angular/core';
import { ClientStateService } from './client-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmployeeInfoApp';

  selectedClient: string | undefined;

  constructor(private clientStateService: ClientStateService) {}

  // Call service 

  ngOnInit() {
    this.clientStateService.selectedClient$.subscribe(client => {
      this.selectedClient = client;
      console.log('Client Theme Changed: ', client);
    });
  }


  //change the client theme 
  
  onClientChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const client = selectElement.value;
    this.clientStateService.setClient(client);
  }
}

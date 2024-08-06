import { Component } from '@angular/core';
import { ClientStateService } from '../client-state.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent {

  submittedData: any[] = [];
  selectedClient: string | undefined;

  constructor(private clientStateService: ClientStateService) {}

  //Call the service 
  
  ngOnInit() {
    this.selectedClient = this.clientStateService.getClient();
    this.clientStateService.selectedClient$.subscribe(client => {
      this.selectedClient = client;
    });
  }

  //Submitting the form

  onSubmit(form: any) {
    const formData = { ...form.value, client: this.selectedClient };
    console.log('Form Submitted: ', formData);
    this.submittedData.push(formData);
    form.reset();
    
  }


  // Reste the form

  onReset(form: any) {
    console.log('Form Reset');
    form.reset();
  }
}

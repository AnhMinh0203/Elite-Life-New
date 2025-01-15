import { Component } from '@angular/core';

@Component({
  selector: 'app-account-manager',
  templateUrl: './account-manager.component.html',
  styleUrl: './account-manager.component.scss'
})
export class AccountManagerComponent {
  rangeDates:any;
  test: any;
  isPermissionExport: boolean = true;
  onDateChange(event:any){
    console.log(event);
  }

}

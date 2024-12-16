import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  hideWallet1 = true;  
  hideWallet2 = true;
  hideWallet3 = true;

  balance1: string = '36343523458';  
  balance2: string = '36,358';
  balance3: string = '36,358';
  info: any;
  baseUrl: string = window.location.origin;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.info = JSON.parse(localStorage.getItem('info') || '{}');
  }

  getMaskedBalance1(): string {
    return '*'.repeat(this.balance1.length) ;
  }

  getMaskedBalance2(): string {
    return '*'.repeat(this.balance2.length);
  }

  getMaskedBalance3(): string {
    return '*'.repeat(this.balance3.length );
  }

  copyToClipboard(text: string): void {
    console.log('Copy to clipboard', text);
    navigator.clipboard.writeText(text).then(() => {
      this.messageService.add({ 
        severity: 'success', 
        summary: 'Thành công', 
        detail: 'Bạn đã copy thành công', 
        life: 3000 
      });
    });
  }

  confirmActivateAccount(): void {
    // Logic to activate account
    console.log('Account activation logic here');
  }

}

import { Component, OnInit } from '@angular/core';

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


  constructor() { }

  ngOnInit() {
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

}

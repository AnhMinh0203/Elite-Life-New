import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-profile',
  templateUrl: './sidebar-profile.component.html',
  styleUrl: './sidebar-profile.component.scss'
})
export class SidebarProfileComponent {
  userInfo:any;
  userName:any;

  ngOnInit() {
    this.userInfo = localStorage.getItem('info');
    if (this.userInfo) {
      const parsedInfo = JSON.parse(this.userInfo);
      this.userName = parsedInfo.name;
    }
  }
}

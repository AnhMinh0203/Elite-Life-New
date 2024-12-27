import { Component, OnInit } from '@angular/core';
import { navItems } from './sidebar-data';
import { NavService } from '../../../services/nav.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  navItems = navItems;
  permission: any;
  filteredNavItems: any[] = [];
  constructor(public navService: NavService) {}

  ngOnInit(): void {
    this.permission = JSON.parse(localStorage.getItem('permission') || '{}');
    this.filteredNavItems = this.navItems.filter(
      (item) => !item.permission || this.permission.includes(item.permission)
    );
  }
}

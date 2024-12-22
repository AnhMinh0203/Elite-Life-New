import {
  Component,
  Output,
  EventEmitter,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { AuthenticateService } from 'src/app/pages/authentication/service/authenticate.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  @Input() showToggle = true;
  @Input() toggleChecked = false;
  @Output() toggleMobileNav = new EventEmitter<void>();
  @Output() toggleMobileFilterNav = new EventEmitter<void>();
  @Output() toggleCollapsed = new EventEmitter<void>();

  showFiller = false;

  constructor(
    public dialog: MatDialog,
    private _authenticateService: AuthenticateService,
    private router: Router
  ) {}

  goToProfile() {
    this.router.navigate(['/profile']); // Change '/profile' with the route you want
  }
  logout() {
    this._authenticateService.logout();
  }
}

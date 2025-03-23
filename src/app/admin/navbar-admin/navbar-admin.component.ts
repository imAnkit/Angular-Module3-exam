import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ManageService } from 'src/app/authentication/services/manage.service';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css'],
})
export class NavbarAdminComponent {
  constructor(private manageService: ManageService, private router: Router) {}

  logout(): void {
    this.manageService.logout();
    this.router.navigate(['/login']);
  }
}

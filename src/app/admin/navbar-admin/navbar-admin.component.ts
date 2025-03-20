import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/authentication/services/profile.service';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css'],
})
export class NavbarAdminComponent {
  constructor(private profileService: ProfileService, private router: Router) {}

  logout(): void {
    this.profileService.logout();
    this.router.navigate(['/login']);
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/authentication/services/profile.service';

@Component({
  selector: 'app-navbar-student',
  templateUrl: './navbar-student.component.html',
  styleUrls: ['./navbar-student.component.css'],
})
export class NavbarStudentComponent {
  constructor(private profileService: ProfileService, private router: Router) {}

  logout(): void {
    this.profileService.logout();
    this.router.navigate(['/login']);
  }
}

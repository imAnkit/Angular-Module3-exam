import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ManageService } from 'src/app/authentication/services/manage.service';

@Component({
  selector: 'app-navbar-student',
  templateUrl: './navbar-student.component.html',
  styleUrls: ['./navbar-student.component.css'],
})
export class NavbarStudentComponent {
  constructor(private manageService: ManageService, private router: Router) {}

  logout(): void {
    this.manageService.logout();
    this.router.navigate(['/login']);
  }
}

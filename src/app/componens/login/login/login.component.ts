import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email = '';
  password = '';
  constructor(private authService: AuthService) {}
  login() {
    this.authService.loginWithEmail(this.email, this.password).subscribe(
      (res) => console.log('Logged In', res),
      (err) => console.error('Error', err)
    );
  }
}

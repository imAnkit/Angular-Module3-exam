import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user/user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  userInput = { email: '', password: '' };

  isLoading: boolean = false;
  errorMessage: string | null = null;
  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  onSubmitClck() {
    this.isLoading = true;
    this.authService.loginUser(this.userInput).subscribe({
      next: (user: User) => {
        this.isLoading = false;
        const userRole = user.type.toLowerCase();
        this.router.navigate(['../../', userRole], { relativeTo: this.route });
      },
      error: (error: Error) => {
        this.isLoading = false;
        this.errorMessage = error.message;
      },
    });
  }
  onGoToSignUp() {
    this.router.navigate(['../', 'register'], { relativeTo: this.route });
  }
}

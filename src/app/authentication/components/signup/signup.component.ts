import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  userInput = { name: '', email: '', password: '', type: '' };

  isLoading: boolean = false;
  errorMessage: string | null = null;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  onSubmit() {
    this.isLoading = true;
    this.authService.registerUser(this.userInput).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate(['../', 'login'], { relativeTo: this.route });
      },
      error: (error: Error) => {
        this.isLoading = false;
        this.errorMessage = error.message;
      },
    });
  }
  onGoToLogin() {
    this.router.navigate(['../', 'login'], { relativeTo: this.route });
  }
}

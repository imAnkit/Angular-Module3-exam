import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../shared/constants/firebase';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  loginWithEmail(email: string, password: string) {
    return this.http
      .post(
        `${environment.authUrl}/accounts:signInWithCustomToken?key=${environment.firebaseApiKey}`,
        { email, password, returnSecureToken: true }
      )
      .pipe(
        tap((res: any) => localStorage.setItem('user', JSON.stringify(res)))
      );
  }

  requestOtp(phoneNumber: string) {
    return this.http.post(
      `${environment.authUrl}/accounts:sendVerificationCode?key=${environment.firebaseApiKey}`,
      { phoneNumber }
    );
  }

  verifyOtp(sessionInfo: string, otp: string) {
    return this.http.post(
      `${environment.authUrl}/accounts:signInWithPhoneNumber?key=${environment.firebaseApiKey}`,
      { sessionInfo, code: otp }
    );
  }
}

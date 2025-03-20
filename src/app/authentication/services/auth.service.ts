import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProfileService } from './profile.service';
import { AuthResponse } from 'src/app/models/auth/authresponse';
import {
  BASE_URL,
  FIREBASE_SIGN_IN_URL,
  FIREBASE_SIGN_UP_URL,
  USER_ENDPOINT,
} from 'src/app/shared/constants/firebase';
import { map, switchMap, tap } from 'rxjs';
import { User } from 'src/app/models/user/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private profileService: ProfileService
  ) {}

  registerUser(user: {
    name: string;
    email: string;
    password: string;
    type: string;
  }) {
    return this.http
      .post<AuthResponse>(FIREBASE_SIGN_UP_URL, {
        ...user,
        returnSecureToken: true,
      })
      .pipe(
        switchMap((response) =>
          this.storeUserData(response, user.name, user.type)
        )
      );
  }

  storeUserData(authResponse: AuthResponse, name: string, type: string) {
    const userId = authResponse.localId;
    const token = authResponse.idToken;
    return this.http.put(
      `${BASE_URL}/${USER_ENDPOINT}/${userId}.json?auth=${token}`,
      {
        id: userId,
        name: name,
        email: authResponse.email,
        type: type,
      }
    );
  }
  loginUser(user: { email: string; password: string }) {
    return this.http
      .post<AuthResponse>(FIREBASE_SIGN_IN_URL, {
        ...user,
        returnSecureToken: true,
      })
      .pipe(switchMap((response) => this.fetchUserData(response)));
  }

  fetchUserData(authResponse: AuthResponse) {
    const userId = authResponse.localId;
    const token = authResponse.idToken;

    return this.http
      .get<User>(`${BASE_URL}/${USER_ENDPOINT}/${userId}.json?auth=${token}`)
      .pipe(
        map((user) => {
          return { ...user, token, refreshToken: authResponse.refreshToken };
        }),
        tap((user: User) => this.profileService.setUserInLocal(user))
      );
  }
  logout() {
    this.profileService.logout();
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../shared/constants/firebase';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUser(userId: string) {
    return this.http.get(`${environment.databaseUrl}/users/${userId}.json`);
  }

  getAllUsers() {
    return this.http.get<{ [key: string]: User }>(
      `${environment.databaseUrl}/users.json`
    );
  }

  createUser(userData: User) {
    return this.http.post(`${environment.databaseUrl}/users.json`, userData);
  }
}

import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from 'src/app/models/user/user';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private USER_DATA_TOKEN = 'USER_DATA';
  private user: User | undefined = undefined;
  private userSubject = new Subject<User | undefined>();
  constructor() {
    this.user = this.getUserFromLocal();
    this.userSubject.next(this.user);
  }

  getUser(): User | undefined {
    return this.user ? { ...this.user } : undefined;
  }
  getUserId(): string | undefined {
    return this.user?.id;
  }
  getUserSubject(): Observable<User | undefined> {
    return this.userSubject.asObservable();
  }
  getUserFromLocal(): User | undefined {
    const data = localStorage.getItem(this.USER_DATA_TOKEN);
    return data ? JSON.parse(data) : undefined;
  }
  setUserInLocal(user: User): void {
    this.user = user;
    this.userSubject.next(this.getUser());
    localStorage.setItem(this.USER_DATA_TOKEN, JSON.stringify(user));
  }
  logout() {
    this.user = undefined;
    this.userSubject.next(undefined);
    localStorage.removeItem(this.USER_DATA_TOKEN);
  }
}

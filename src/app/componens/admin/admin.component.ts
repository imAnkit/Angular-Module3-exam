import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  users: User[] = [];
  newUser: User = { name: '', email: '', role: 'student' };
  userId!: string;

  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((users) => {
      this.users = Object.keys(users).map((key) => ({
        id: key,
        ...users[key],
      }));
    });
  }
  createUser() {
    if (!this.newUser.email || !this.newUser.name) {
      return alert('Fill all fields');
    }
    this.userService.createUser(this.newUser).subscribe(() => {
      alert('User Created');
      this.newUser = { name: '', email: '', role: 'student' };
      this.ngOnInit();
    });
  }
}

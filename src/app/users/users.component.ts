import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private httpClient: HttpClient) { } //inject http client in constructor

  ngOnInit(): void {
    this.httpClient.get<User[]>('http://localhost:5000/users').subscribe(response => this.users = response);
  }

}

export interface User {
  id : string;
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  user_name: string;
}

import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UsersService]
})
export class UserListComponent implements OnInit {
  users: User[];

  constructor(private userService: UsersService) { }

  ngOnInit() {
  	// this.users = this.userService.users;
  }

  onAddNewUser(){
  	console.log('add new user');
  }

  onClear(){
  	console.log('clear result and input search');
  }

}

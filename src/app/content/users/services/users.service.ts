import { Injectable } from '@angular/core';
import { User } from '../user.model';

@Injectable()
export class UsersService {
  users: User[];

  constructor() { 
  	this.users = [
  		new User('admin', 'Admin', 'Admin'),
  		new User('test', 'Test', 'Test')
  	];
  }

}

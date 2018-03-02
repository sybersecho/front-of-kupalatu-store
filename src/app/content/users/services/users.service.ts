import { Injectable, EventEmitter } from '@angular/core';

import { User } from '../user.model';

@Injectable()
export class UsersService {
  private users: User[];
  searchUserEvent = new EventEmitter<User[]>();
  userEditEvent = new EventEmitter<User>();

  constructor() {
    this.users = [
      new User(1, 'admin', 'Admin', 'Admin'),
      new User(2, 'test', 'Test', 'Test')
    ];
  }

  public searchUser(keyword: string) {
    this.searchUserEvent.emit(this.users);
  }

  public editUser(user: User) {
    this.userEditEvent.emit(this.users[0]);
  }

  getUserById(index: number) {
    if (index < this.users.length ) {
      return this.users[index];
    }
    return new User(0, '', '', '');
  }

}

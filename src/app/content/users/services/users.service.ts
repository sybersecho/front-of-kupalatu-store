import { Injectable } from '@angular/core';

import { User } from '../user.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UsersService {
  private users: User[];
  searchUserEvent = new Subject<User[]>();
  userEditEvent = new Subject<User>();

  constructor() {
    this.users = [
      new User(1, 'admin', 'Admin', 'Admin'),
      new User(2, 'test', 'Test', 'Test')
    ];
  }

  public searchUser(keyword: string) {
    this.searchUserEvent.next(this.users);
  }

  public editUser(user: User) {
    this.userEditEvent.next(user);
  }

  getUserById(index: number) {
    if (index < this.users.length ) {
      return this.users[index];
    }
    return new User(0, '', '', '');
  }

}

import { Injectable } from '@angular/core';

import { User } from '../user.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UsersService {
  private users: User[];
  searchUserEvent = new Subject<User[]>();
  userEditEvent = new Subject<number>();

  constructor() {
    this.users = [
      new User(1, 'admin', 'Admin', 'Admin'),
      new User(2, 'test', 'Test', 'Test')
    ];
  }

  public searchUser(keyword: string) {
    this.searchUserEvent.next(this.users.slice());
  }

  public editUser(index: number) {
    this.userEditEvent.next(index);
  }

  getUserById(index: number) {
    if (index < this.users.length ) {
      return this.users[index];
    }
    return new User(0, '', '', '');
  }

  saveUser(user: User) {
    const userLen = this.users.length;
    const newId = this.users[userLen - 1].id + 1;
    user.id = newId;
    this.users.push(user);
    return true;
  }

  updateUser(id: number, newUser) {
    const index = this.findIndex(id);
    // u.firstName = newUser.firstName;
    this.users[index] = newUser;
    return true;
  }

  delete(id: number) {
    // console.log();
    this.users.splice(this.findIndex(id), 1);
    this.searchUserEvent.next(this.users.slice());
  }

  private findIndex(id: number) {
    return this.users.findIndex(
      (x) => {
        return x.id == id;
      }
    );
  }

}

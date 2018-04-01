import { Injectable } from '@angular/core';

import { User } from '../models/user.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UsersService {
  private users: User[];
  userChanged = new Subject<User[]>();
  searchUserChanged = new Subject<User[]>();
  // userEditEvent = new Subject<number>();

  constructor() {
    this.users = [
      new User(1, 'admin', 'Admin', 'Admin'),
      new User(2, 'test', 'Test', 'Test')
    ];
  }

  private getAllUsers() {
    return this.users.slice();
  }

  public searchUser(keyword: string) {
    this.searchUserChanged.next(this.getAllUsers());
    // return this.getAllUsers();
  }

  public editUser(index: number) {
    // this.userEditEvent.next(index);
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
    this.searchUserChanged.next(this.getAllUsers());
    return true;
  }

  updateUser(id: number, newUser) {
    // const index = this.findIndex(id);
    // u.firstName = newUser.firstName;
    this.users[id] = newUser;
    return true;
  }

  delete(id: number) {
    console.log('delete id: ' + id);
    this.users.splice(id, 1);
    // this.users.splice(this.findIndex(id), 1);
    this.searchUserChanged.next(this.getAllUsers());
  }

  // private findIndex(id: number) {
  //   return this.users.findIndex(
  //     (x) => {
  //       return x.id == id;
  //     }
  //   );
  // }

}

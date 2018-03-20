import { Component, OnInit, OnDestroy, Output } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UsersService]
})
export class UserListComponent implements OnInit, OnDestroy {
  users: User[];
  // @Output('selectedUser') selectedUser: User;
  private subscription: Subscription;

  constructor(private userService: UsersService) { }

  ngOnInit() {
    // this.users = this.userService.users;
    // this.subscription = this.userService.userEditEvent.subscribe(
    //   (selectedUser: User) => {
    //     if (!selectedUser) {
    //       console.log('user is null');
    //     } else {
    //       console.log('user is not null');
    //     }
    //     this.selectedUser = selectedUser;
    //   }
    // );
  }

  onAddNewUser() {
    console.log('add new user');
  }

  onClear() {
    console.log('clear result and input search');
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
}

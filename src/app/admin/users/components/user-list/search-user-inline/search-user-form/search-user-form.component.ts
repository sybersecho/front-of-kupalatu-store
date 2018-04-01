import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../../services/users.service';
import { User } from '../../../../models/user.model';

@Component({
  selector: 'app-search-user-form',
  templateUrl: './search-user-form.component.html',
  styleUrls: ['./search-user-form.component.css']
})
export class SearchUserFormComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UsersService) { }

  ngOnInit() {
  }

  onSearchT() {
    this.userService.searchUser('');
    console.log('search');
  }
}

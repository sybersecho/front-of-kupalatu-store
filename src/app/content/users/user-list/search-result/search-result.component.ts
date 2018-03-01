import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../services/users.service';
import { User } from '../../user.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  userFound: User[];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
  	this.userFound = this.usersService.users;
  }

}

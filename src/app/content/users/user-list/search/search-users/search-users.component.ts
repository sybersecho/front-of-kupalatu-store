import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.css']
})
export class SearchUsersComponent implements OnInit {
  // @ViewChild('searchInput') searchInput: ElementRef;
  searchInput = 'test';

  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }

  onSearch() {
    this.usersService.searchUser(this.searchInput);
  }

}

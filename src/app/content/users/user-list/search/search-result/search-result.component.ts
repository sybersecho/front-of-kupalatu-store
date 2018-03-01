import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsersService } from '../../../services/users.service';

import { User } from '../../../user.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  userFound: User[];

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit() {
  	this.usersService.searchUserEvent.subscribe(
  			(searchResult: User[]) => {
  				this.userFound = searchResult;
  			}
  		);
  }

  onDelete(user){
  	console.log('on delete');  	
  }

  onEdit(user){
  	this.router.navigate(['/users', user.id]);
  }

}

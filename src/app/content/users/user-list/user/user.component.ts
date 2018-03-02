import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UsersService } from '../../services/users.service';
import { User } from '../../user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;

  constructor(private userService: UsersService, 
  	private route: ActivatedRoute) { 
  	// this.user = new User(0, '', '', '')
  }

  ngOnInit() {
  	const id = +this.route.snapshot.params['id']
  	this.user = this.userService.getUserById(id-1);
  }

}

import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;
  constructor(private userService: UsersService) { 
  	this.user = new User(0, '', '', '')
  }

  ngOnInit() {
  	// this.userService.userEditEvent
  	// 	.subscribe(
  	// 		(selectedUser:  User) => {
  	// 			this.user = selectedUser;
  	// 		}
  	// 	);
  }

}

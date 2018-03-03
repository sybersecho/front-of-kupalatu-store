import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UsersService } from '../../services/users.service';
import { User } from '../../user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: User;
  // @Input('selectedUser') selectedUser: User;

  constructor(private userService: UsersService,
    private route: ActivatedRoute) {
      // this.user = new User(0, '', '', '')
  }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.user = this.userService.getUserById(id - 1);
    // console.log(this.selectedUser ? 'not null' : 'null');
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

}

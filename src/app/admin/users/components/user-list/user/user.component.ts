import { Component, OnInit, OnDestroy, Input, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { UsersService } from '../../../services/users.service';
import { User } from '../../../models/user.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: User;
  subscription: Subscription;
  id: number;
  isEdit = false;
  isSuccess = false;
  @ViewChild('formUser') form: NgForm;

  constructor(private userService: UsersService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    // this.route.params.subscribe(
    //   (params: Params) => {
    //     this.id = params['id'];
    //     this.isEdit = params['id'] !== 'new';
    //     this.user = this.userService.getUserById(this.id - 1);
    //   }
    // );
  }

  onSubmit() {
    const newUser = new User(
      this.id,
      this.form.value['username'],
      this.form.value['firstName'],
      this.form.value['lastName']
    );

    if (this.isEdit) {
      this.isSuccess = this.userService.updateUser(this.id, newUser);
    } else {
      this.isSuccess = this.userService.saveUser(newUser);
    }

    if (this.isSuccess) {
      this.onClear();
    }
  }

  onClear() {
    this.form.reset();
  }

  ngOnDestroy() {
  }

}

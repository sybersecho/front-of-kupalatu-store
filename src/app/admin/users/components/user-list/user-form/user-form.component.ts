import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../../models/user.model';
import { UsersService } from '../../../services/users.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  user: User = new User(-1, '', '', '');
  private isEdit = false;
  id = -1;

  constructor(private userService: UsersService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form);
    console.log(form.value['txtUsername']);
    const newUser: User = new User(this.id, form.value['txtUsername'], form.value['txtFirtName'], form.value['txtLastName']);
    if (this.isEdit) {
      // this.userService.updateUser();
    } else {
      this.userService.saveUser(newUser);
    }
  }

}

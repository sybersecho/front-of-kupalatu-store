import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { UsersService } from '../../../services/users.service';

import { User } from '../../../user.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit, OnDestroy {
  userFound: User[];
  private subscription: Subscription;

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit() {
    this.subscription = this.usersService.searchUserEvent.subscribe(
      (searchResult: User[]) => {
        this.userFound = searchResult;
      }
    );
  }

  onDelete(id: number) {
    // console.log('on delete');
    this.usersService.delete(id);
  }

  onEdit(index: number) {
    this.usersService.editUser(index);
    // console.log(index);
    this.router.navigate(['/users', index]);
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
   }
}

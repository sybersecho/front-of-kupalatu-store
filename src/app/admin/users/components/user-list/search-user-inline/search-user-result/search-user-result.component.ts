import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { User } from '../../../../models/user.model';
import { UsersService } from '../../../../services/users.service';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-user-result',
  templateUrl: './search-user-result.component.html',
  styleUrls: ['./search-user-result.component.css']
})
export class SearchUserResultComponent implements OnInit, OnDestroy {
  users: User[] = [];
  subscription: Subscription;

  constructor(private userService: UsersService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.userService.searchUserChanged.subscribe(
      (usersParam: User[]) => {
        this.users = usersParam;
      }
    );
  }

  onEdit(i) {
    console.log('edit');
    this.router.navigate([i], {relativeTo: this.activatedRoute});
  }

  onDelete(i) {
    this.userService.delete(i);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

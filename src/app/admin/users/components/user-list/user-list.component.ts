import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  onAddUser() {
    // TODO find best way to hide the button
    // this.btnAddProduct.nativeElement.hidden = true;
    this.router.navigate(['new'], {relativeTo: this.activatedRoute});
  }

}

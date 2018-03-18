import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-inline',
  templateUrl: './search-inline.component.html',
  styleUrls: ['./search-inline.component.css']
})
export class SearchInlineComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }
}

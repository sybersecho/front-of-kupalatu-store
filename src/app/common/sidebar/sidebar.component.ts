import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Output() menuSelected = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {
  }

  onSelect(menu: string){
  	// console.log(menu);
  	this.menuSelected.emit(menu);
  }

}

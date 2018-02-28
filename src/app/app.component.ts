import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  menuClicked = 'products';

  onNavigate(menu: string){
  	this.menuClicked = menu;
  }
}

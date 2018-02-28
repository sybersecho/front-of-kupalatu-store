import { OnInit, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  serverName: string = 'testServer';
  serverCreationStatus = "no server was created!";
  isServerCreated = false;
  servers = ['Test server 1', 'Test server 2'];

  constructor() { }

  ngOnInit() {
  }

  onCreateServer(){
  	// console.log('create server');
  	this.isServerCreated = true;
  	this.servers.push(this.serverName);
  	this.serverCreationStatus = 'New server created. Server name is ' + this.serverName;
  }

}

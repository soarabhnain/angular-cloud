import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = "No servere was created!!";
  serverName = 'test';
  serverCreated = false;
  servers = ['Testserver', 'TestServer 2'];
  showDetails = true;
  clickCount = [];

  constructor() {
    setTimeout( () => {
      this.allowNewServer = true;
    } , 2000)
   }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created!! Name is " 
    + this.serverName;
  }
  onUpdateServerName(event: any){
    this.serverName = event.target.value;
  }

  toggleDetails(){
    if(this.showDetails){
      this.showDetails = false;
    } else{
      this.showDetails = true;
    }
    this.clickCount.push("clicked");
  }

}

import { Component } from '@angular/core';
import { WebSocketAPI } from './websocketapi';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular8-springboot-websocket';

  webSocketAPI: WebSocketAPI;
  greeting: any;
  name: string;
  isDataAvailable: boolean = false;
  constructor(private snack: MatSnackBar){
    
  }
  ngOnInit() {
    this.webSocketAPI = new WebSocketAPI(new AppComponent(this.snack));
  }

  connect(){
    this.webSocketAPI._connect();
  }

  disconnect(){
    this.webSocketAPI._disconnect();
  }

  sendMessage(){
    this.webSocketAPI._send(this.name);
  }

  handleMessage(message){
    this.greeting = message.content;
    // this.greeting = 'okmen okok!!!'
    this.isDataAvailable = true
    this.snack.open(this.greeting,'OK',{ duration: 4000 })
    // 
    console.log(this.greeting)
  }
}

import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.css']
})
export class HomescreenComponent implements OnInit {
  messages: any = [];
  authState;
  constructor(private service: SharedService) { }

  ngOnInit() {
    this.service.messages.subscribe(res => {
      this.messages.push(res);
      console.log(this.messages);
    });

    this.service.auth.subscribe(res => {
      this.authState = res;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-message-container',
  templateUrl: './message-container.component.html',
  styleUrls: ['./message-container.component.css']
})

export class MessageContainer implements OnInit {

  inputValue: any;
  authState;

  constructor(private service: SharedService) { }

  ngOnInit() {
    this.service.auth.subscribe(res => {
      this.authState = res;
    });
  }

  // check for pressed enter key and call submit function.
  inputTriggered(event) {
    if (event.keyCode === 13) {
      console.log('Enter pressed');

      const messageObject = {
        messageContent: event.target.value,
        messageUserName: this.authState.userName
      };

      this.service.submitValue(messageObject);
      event.target.value = '';
    }
  }

  submitValue(value) {
    const messageObject = {
      messageContent: value,
      messageUserName: this.authState.userName
    };

    this.service.submitValue(messageObject);
    this.inputValue = '';
  }


}

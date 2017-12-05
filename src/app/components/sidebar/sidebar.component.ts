import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  authState = null;

  // register
  inputUserName: any;
  inputPassword: any;

  // Login
  logInUsername: any;
  logInPassword: any;

  constructor(private service: SharedService) { }

  ngOnInit() {
    this.service.auth.subscribe(res => {
      this.authState = res;
      console.log(this.authState);
    });
  }

  submitSidebar() {
    const userObject = {
      userName: this.inputUserName,
      password: this.inputPassword
    };

    this.service.submitToAuth(userObject);

    this.inputUserName = '';
    this.inputPassword = '';
  }

  login() {
    const loginObject = {
      userName: this.logInUsername,
      password: this.logInPassword
    };

    this.service.logIn(loginObject);
  }

  logOut() {
    this.service.logOut();
  }
}

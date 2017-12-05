import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SharedService {
    usersArray = [{ userName: 'admin', password: 'admin'}]; // static array of users.

    constructor() { }

    initialMessage = {
        messageContent: 'Initial message',
        messageUserName: 'Hardcoded'
    };

    // messages subject
    subject = new BehaviorSubject<any>(this.initialMessage);
    messages = this.subject.asObservable();

    users = new BehaviorSubject<any>(null); // authentication state with user object.
    auth = this.users.asObservable();

    submitValue(value) {
        this.subject.next(value); // next new message value
    }
    // Pushing new object to array
    // next with new array to users subject
    submitToAuth(userObject) {
        for (let i = 0; i < this.usersArray.length; i ++) { // check array for existsing user.
            if (this.usersArray[i].userName === userObject.userName) {
                console.log('User Exists');
                return false;
            }
        }
        this.usersArray.push(userObject);
        this.users.next(userObject);
    }

    logOut() {
        this.users.next(null); // Push null to usersObservable.
    }

    logIn(logInUserObject) {
        for (let i = 0; i < this.usersArray.length; i ++) {
            if ( this.usersArray[i].userName === logInUserObject.userName ) {
                if (this.usersArray[i].password !== logInUserObject.password) {
                    console.log('Wrong password');
                    return;
                } else {
                    this.users.next(logInUserObject);
                }
            } else {
                console.log('User not found');
            }
        }
    }
}



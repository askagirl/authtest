import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private _authservice: AuthService ) {}

  ngOnInit() {
    console.log('Starting firebaseui');
    var ui = this._authservice.startFirebaseUI();
  }
  
  
  getUserStatus() {
    return this._authservice.getUserStatus();
  }

}

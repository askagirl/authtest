import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  private ui:any;
  constructor( private _authservice: AuthService ) {}

  ngOnInit() {
    console.log('Starting firebaseui');
    this.ui = this._authservice.startFirebaseUI();
    console.log('firebaseUI started');
  }
  
  getUserStatus() {
    return this._authservice.getUserStatus();
  }

}

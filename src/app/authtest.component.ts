import { Component } from '@angular/core';
import { LoginComponent } from './+login';

import { AuthService } from './auth.service';

import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'authtest-app',
  templateUrl: 'authtest.component.html',
  styleUrls: ['authtest.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, AuthService]
})
@Routes([
  {path: '/login', component: LoginComponent}
])
export class AuthtestAppComponent {
  
  constructor( private _authService: AuthService, private _router: Router ) {}
  
  title = 'Firebase Auth Experiment';
  
  getUserStatus() {
    var status = this._authService.getUser();
    if (status) {
      return 'Logged in';
    } else {
      return 'Logged out';
    }
  }
  
  getUserEmail() {
    var user = this._authService.getUser();
    if (user) {
      var userEmail = user.email;
    } else { return ''; }
    return userEmail;
  }
  
  getUserPhoto() {
    var user = this._authService.getUser();
    if (user) {
      var userPicUrl = user.photoURL;
    } else { return false; }
    return userPicUrl;
  }
    
  signOut() {
    this._authService.signOut();
  }
  
}

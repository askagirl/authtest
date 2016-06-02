import { Component } from '@angular/core';
import { LoginComponent } from './+login';
import { MainComponent } from './+main';

import { AuthService } from './auth.service';

import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'authtest-app',
  templateUrl: 'authtest.component.html',
  styleUrls: ['authtest.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, AuthService]
})
@Routes([
  {path: '/login', component: LoginComponent},
  {path: '/main', component: MainComponent}
])
export class AuthtestAppComponent {
  
  constructor( private _authService: AuthService ) {}
  
  title = 'Firebase Auth Experiment';
  
  getUserStatus() {
    return this._authService.getUserStatus();
  }
  
  getUserInfo() {
    // console.log('getting user');
    var user = this._authService.getUser();
    if (user) {
      var userEmail = user.email;
    } else { return 'No user'; }
    return userEmail;
  }
  
  signIn() {
    this._authService.signIn();
  }
  
  signOut() {
    this._authService.signOut();
  }
  
}

import { Component } from '@angular/core';
import { LoginComponent } from './+login';
import { MainComponent } from './+main';

import { AuthService } from './auth.service';

import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router} from '@angular/router';

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
  
  constructor( private _authService: AuthService, private _router: Router ) {}
  
  title = 'Firebase Auth Experiment';
  
  getUserStatus() {
    var status = this._authService.getUserStatus();
    return status;
  }
  
  getUserInfo() {
    // console.log('getting user');
    var user = this._authService.getUser();
    if (user) {
      var userEmail = user.email;
    } else { return 'No user'; }
    return userEmail;
  }
    
  signOut() {
    this._authService.signOut();
  }
  
  getUserPhoto() {
    // console.log('getting user');
    var user = this._authService.getUser();
    if (user) {
      console.log('PhotoURL: ' + user.photoURL);
      var userPicUrl = user.photoURL;
    } else { return 'no user'; }
    // console.log('Got photo' + userPicUrl);
    return userPicUrl;
  }
  
}

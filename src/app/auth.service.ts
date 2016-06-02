declare var firebase: any;
declare var app: any;
declare var auth: any;
// declare var ui: any;
declare var firebaseui: any;

import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class AuthService {
  
  private userStatus = false;

  constructor() {
    this.init();
  }

  private init() {
    var config = {
      apiKey: "AIzaSyBPYbReVX_nCMnYi4d4IC6CmSchDkxeDpM",
      authDomain: "experiment-one-b4b37.firebaseapp.com",
      databaseURL: "https://experiment-one-b4b37.firebaseio.com",
      storageBucket: "experiment-one-b4b37.appspot.com",
    };
    
   
    console.log('initializing firebase');
    var app = firebase.initializeApp(config);
    
    console.log('initializing auth');
    var auth = app.auth();
    
    
    this.userStatusObserver();
  }

  userStatusObserver() {
    firebase.auth().onAuthStateChanged( this.toggleUser );
  }

  private toggleUser(user) {
    if (user) {
        // User is signed in.
        console.log('Observer detected user sign-in event.');
        console.log(user);
        sessionStorage.setItem('userStatus', 'true');
        console.log('Stored status');
        console.log(user.email);
      } else {
        // No user is signed in.
        console.log('Observer detected user sign-out event.');
        sessionStorage.clear();
        console.log('Cleared status');
      }
  }
  
  public startFirebaseUI() {
    // FirebaseUI config.
      var uiConfig = {
        'siteName': 'experimentOne',
        'signInSuccessUrl': '/main',
        'signInOptions': [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        'callbacks': {
          'signInSuccess': function(currentUser, credential, redirectUrl) {
            // Do something.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            console.log('User signed in succesfully.');
            return true;
          }
        }
      };
      var ui = new firebaseui.auth.AuthUI(firebase.auth());
      ui.start('#firebaseui-auth-container', uiConfig);
      return ui;
  }
  
  // private setUserStatus(status) {
  //   console.log('Setting user status to ' + status);
  //   this.userStatus = status;
  // }
  
  public getUserStatus() {
    // console.log('AuthService returning user status');
    var userStatus = sessionStorage.getItem('userStatus');
    if ( userStatus === 'true') {
      return true;
    } else {
      return false;
    }
  }
  
  getUser() {
    if (this.getUserStatus()) {
      var user = firebase.auth().currentUser;
      // console.log(user);
      // console.log(user.email);
      return user;
    } else { return null; }
  }

  // signIn(){
  //   firebase.auth().signInWithEmailAndPassword('mark@flegg.us', 'borshoes').catch(function(error) {
  //     // Handle Errors here.
  //     var errorCode = error.code;
  //     var errorMessage = error.message;
  //       console.log('Error signing in...');
  //       console.log(error);
  //     // ...
  //   });
  //   console.log('User signed in.');
  // }

  signOut(){
    firebase.auth().signOut().then(function() {
      console.log('User succesfully signed out.');
    }, function(error) {
      console.log('Error signing out...');
      console.log(error);
    });
  }

  toggleStatus() {
    if ( this.userStatus ) {
      this.userStatus = false;
      console.log('Set to false.');
    } else {
      this.userStatus = true;
      console.log('Set to true.');
    }
  }
}

declare var firebase: any;
declare var firebaseui: any;

import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  
  public ui:any;

  constructor() {
    this.init();
  }

  private init() {
    var config = {
      apiKey: "AIzaSyCS0knqsGspwJGp-xfKqRYPO-rX5B1kf8A",
      authDomain: "authtest-55ecb.firebaseapp.com",
      databaseURL: "https://authtest-55ecb.firebaseio.com",
      storageBucket: "",
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
      } else {
        // No user is signed in.
        console.log('Observer detected user sign-out event.');
      }
  }
  
  getUser() {
    return firebase.auth().currentUser;
  }

  signOut(){
    firebase.auth().signOut().then(function() {
      console.log('User succesfully signed out.');
    }, function(error) {
      console.log('Error signing out...');
      console.log(error);
    });
  }
  
  startFirebaseUI() {
    console.log('Starting Firebase-ui');
    // FirebaseUI config.
      var uiConfig = {
        'siteName': 'experimentOne',
        'signInSuccessUrl': '/',
        'signInOptions': [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          firebase.auth.TwitterAuthProvider.PROVIDER_ID,
          firebase.auth.GithubAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        'callbacks': {
          'signInSuccess': function(currentUser, credential, redirectUrl) {
            console.log('User signed in succesfully.');
            return true;
          }
        }
      };
      this.ui = new firebaseui.auth.AuthUI(firebase.auth());
      this.ui.start('#firebaseui-auth-container', uiConfig);
      console.log('firebase-UI started');
      return this.ui;
  }
}

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
    this.ui = this._authservice.startFirebaseUI();
  }

}

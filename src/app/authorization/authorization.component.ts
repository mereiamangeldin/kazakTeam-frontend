import { Component } from '@angular/core';
import {AuthService} from "../auth.service";
import {error} from "@angular/compiler-cli/src/transformers/util";
export interface User{
  username: string,
  password: string
}
@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})


export class AuthorizationComponent {
  username: string;
  password: string;
  invalidData: boolean;
  constructor(private authService: AuthService) {
    this.password = "";
    this.username = "";
    this.invalidData = false;
  }

  login(){
      let user = {
      username: this.username,
      password: this.password
    }
    this.authService.login(user).subscribe(result => {
      localStorage.setItem('token', result.token);
    }, error => {
      this.invalidData = true;
    })
  }
}

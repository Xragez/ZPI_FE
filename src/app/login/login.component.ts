import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {AuthService, LoginUser} from "../service/auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginError: boolean = false;

  constructor(private authService: AuthService) {}

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8),]),
  })

  get email(){
    return this.loginForm.get('email');
  }

  get password(){
    return this.loginForm.get('password');
  }

  loginUser(){
    const user:LoginUser = {
      email: this.email?.value ? this.email?.value : '',
      password: this.password?.value ? this.password?.value : ''
    }
    this.loginError = false;
    this.authService.login(user).subscribe({
      next: response => {console.log(response)},
      error: () => {this.loginError = true}
    })
  }
}

import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {AuthService, LoginUser} from "../service/auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginError: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

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
    if (this.email?.value && this.password?.value) {
      const user:LoginUser = {
        email: this.email?.value,
        password: this.password?.value
      }
      this.loginError = false;
      this.authService.login(user).subscribe({
        next: () => {this.router.navigate(['/main'])},
        error: () => {this.loginError = true}
      })
    }
  }
}

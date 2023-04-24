import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { passwordMatch } from 'src/validators/passwordMatch';
import { AbstractControl } from "@angular/forms";
import {AuthService, RegisterUser} from "../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerError: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}
  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8),]),
    confirmPassword: new FormControl('', [Validators.required]),
    username: new FormControl('', Validators.required)
  }, [passwordMatch("password", "confirmPassword")])

  getControl(name: any): AbstractControl | null {

    return this.registerForm.get(name)

  }

  get email(){
    return this.registerForm.get('email');
  }

  get password(){
    return this.registerForm.get('password');
  }

  get confirmPassword(){
    return this.registerForm.get('confirmPassword');
  }

  get username(){
    return this.registerForm.get('username');
  }

  registerUser(){
    if (this.username?.value && this.email?.value && this.password?.value) {
      const user:RegisterUser = {
        username: this.username?.value,
        email: this.email?.value,
        password: this.password?.value
      }
      this.registerError = false;
      this.authService.register(user).subscribe({
        next: () => {this.router.navigate(['/login'])},
        error: () => {this.registerError = true}
      })
    }
  }

}

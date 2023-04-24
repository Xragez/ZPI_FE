import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { passwordMatch } from 'src/validators/passwordMatch';
import { AbstractControl } from "@angular/forms";
import {AuthService, RegisterUser} from "../service/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private authService: AuthService) {}
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
    const user:RegisterUser = {
      username: "test",
      email: "Test",
      password: "test"
    }
    this.authService.register(user);
    console.warn(this.registerForm.value)
  }

}

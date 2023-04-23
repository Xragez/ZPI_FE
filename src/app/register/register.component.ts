import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { passwordMatch } from 'src/validators/passwordMatch';
import { AbstractControl } from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8),]),
    confirmPassword: new FormControl('', [Validators.required]),
    nick: new FormControl("", Validators.required)
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

  get nick(){
    return this.registerForm.get('nick');
  }

  registerUser(){
    console.warn(this.registerForm.value)
  }

}

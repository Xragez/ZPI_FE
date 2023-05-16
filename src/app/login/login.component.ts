import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService, LoginUser} from "../service/auth-service/auth.service";
import {Router} from "@angular/router";
import {LocalService} from "../service/local-service/local.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginError: boolean = false;

  constructor(private authService: AuthService, private router: Router, private localStore: LocalService) {
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8),]),
  })

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  loginUser() {
    if (this.email?.value && this.password?.value) {
      const user: LoginUser = {
        email: this.email?.value,
        password: this.password?.value
      }
      this.loginError = false;
      this.authService.login(user).subscribe({
        next: (response: any) => {
          this.localStore.saveData('email', response.email);
          this.localStore.saveData('username', response.username);
          this.localStore.saveData('role', response.role);
          this.localStore.saveData('id', response.id);

          console.log(response);
          this.router.navigate(['/main'])
        },
        error: () => {
          this.loginError = true
        }
      })
    }
  }
}

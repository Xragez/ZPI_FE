import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  register(user: RegisterUser) {
    return this.http.post(`${environment.apiUrl}/register`, user).pipe(catchError(() => {
      return throwError(()=>{});
    }));
  }

  login(user: LoginUser) {
    return this.http.post(`${environment.apiUrl}/login`, user).pipe(catchError(() => {
      return throwError(()=>{});
    }));
  }
}

export class RegisterUser {
  constructor(username: string, email: string, password: string) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  username: string
  email: string
  password: string
}

export class LoginUser {
  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }

  email: string
  password: string
}

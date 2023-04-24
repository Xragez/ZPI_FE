import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  register(user: RegisterUser) {
    return this.http.post("http://localhost:8080/register", user).pipe(catchError(() => {
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

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  register(user: RegisterUser) {
    this.http.post("http://localhost:8080/register", user)
      .subscribe(response => {console.log(response)});
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

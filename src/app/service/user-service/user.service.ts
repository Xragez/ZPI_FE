import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {environment} from '../../../environments/environment'
import { User } from 'src/app/model/user';
import { LocalService } from '../local-service/local.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private httpOptions = {}

  constructor(private http: HttpClient, private localStore: LocalService) {
    const token = this.localStore.getData("token")
    this.httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Basic ' + token
      })
    }
  }

  updateToken() {
    const token = this.localStore.getData("token")
    this.httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Basic ' + token
      })
    }
  }

  getAllUsers() {
    return this.http.get(`${environment.apiUrl}/users`).pipe(catchError(() => {
      return throwError(()=>{});
    }));
  }

  getUserByEmail(email: string | null) {
    return this.http.get(`${environment.apiUrl}/users/${email}`, this.httpOptions).pipe(catchError(() => {
      return throwError(()=>{});
    }));
  }

  updateUserDetails(user: User) {
    return this.http.put(`${environment.apiUrl}/users/user`, user, this.httpOptions).pipe(catchError(() => {
      return throwError(()=>{});
    }));
  }

  updateUserAvatar(id: string | null, avatar: any) {
    return this.http.put(`${environment.apiUrl}/users/set_avatar/${id}`, avatar, this.httpOptions).pipe(catchError(() => {
      return throwError(() => {})
    }));
  }

  checkPassword(id: string | null, password: string) {
    return this.http.post(`${environment.apiUrl}/users/validate_password/${id}`, password, this.httpOptions).pipe(catchError(() => {
      return throwError(() => {})
    }));
  }

  updatePassword(id: string | null, newPassword: string) {
    return this.http.put(`${environment.apiUrl}/users/password_change/${id}`, newPassword, this.httpOptions).pipe(catchError(() => {
      return throwError(() => {})
    }));
  }
}
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {environment} from '../../../environments/environment'
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUserByEmail(email: string | null) {
    return this.http.get(`${environment.apiUrl}/users/${email}`).pipe(catchError(() => {
      return throwError(()=>{});
    }));
  }

  updateUserDetails(user: User) {
    return this.http.put(`${environment.apiUrl}/user`, user).pipe(catchError(() => {
      return throwError(()=>{});
    }));
  }

}

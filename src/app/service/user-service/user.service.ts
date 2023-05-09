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


  httpOptions = {}

  constructor(private http: HttpClient, private localStore: LocalService) {
    const token = this.localStore.getData("token")
    this.httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Basic ' + token
      })
    }
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

}

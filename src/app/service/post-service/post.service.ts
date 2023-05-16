import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LocalService} from "../local-service/local.service";
import {environment} from "../../../environments/environment";
import {catchError} from "rxjs/operators";
import {throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private httpOptions = {};

  constructor(private http: HttpClient, private localStore: LocalService) {
    const token = this.localStore.getData("token")
    this.httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Basic ' + token
      })
    }
  }

  getAllPosts() {
    return this.http.get(`${environment.apiUrl}/posts`).pipe(catchError(() => {
      return throwError(()=>{});
    }));
  }

  saveNewPost(content: String) {
    return this.http.post(`${environment.apiUrl}/posts/newPost`, {content}, this.httpOptions).pipe(catchError(() => {
      return throwError(()=>{});
    }));
  }
}

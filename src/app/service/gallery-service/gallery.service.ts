import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import { LocalService } from '../local-service/local.service';
import {environment} from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private httpOptions = {}

  constructor(private http: HttpClient, private localStore: LocalService) {
    const token = this.localStore.getData("token")
    this.httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Basic ' + token
      })
    }
  }

  getImages() {
    return this.http.get(`${environment.apiUrl}/images`, this.httpOptions).pipe(catchError(() => {
      return throwError(() => {})
    }));
  }
}

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

  saveImage(userId: string, category: number | null, description: any, image: any) {
    return this.http.post(`${environment.apiUrl}/images/newImage/${userId}/${category}/${description}`, image, this.httpOptions).pipe(catchError(() => {
      return throwError(() => {})
    }));
  }

  addRating(userId: any, imageId: any, rating: any) {
    var body = {
      ownerId: userId,
      imageId: imageId,
      rating: rating,
    }
    return this.http.put(`${environment.apiUrl}/images/add_rating`, body, this.httpOptions).pipe(catchError(() => {
      return throwError(() => {})
    }));
  }

  getImageById(id: any) {
    return this.http.get(`${environment.apiUrl}/images/imagedata/${id}`, this.httpOptions).pipe(catchError(() => {
      return throwError(() => {})
    }));
  }

  addComment(content: String, imageId: number) {
    return this.http.post(`${environment.apiUrl}/images/add_comment`, {content, imageId}, this.httpOptions).pipe(catchError(() => {
      return throwError(()=>{});
    }));
  }

  getComments(imageId: number) {
    return this.http.get(`${environment.apiUrl}/images/get_comments/${imageId}`, this.httpOptions).pipe(catchError(() => {
      return throwError(()=>{});
    }));
  }

  getUsersImages(userId: any) {
    return this.http.get(`${environment.apiUrl}/images/${userId}`, this.httpOptions).pipe(catchError(() => {
      return throwError(()=>{});
    }));
  }
}

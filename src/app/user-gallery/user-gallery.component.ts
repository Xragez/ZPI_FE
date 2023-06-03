import { Component, OnInit } from '@angular/core';
import { NgxMasonryOptions } from 'ngx-masonry';
import { GalleryService } from '../service/gallery-service/gallery.service';
import { Image } from '../model/image';
import { MatDialog } from '@angular/material/dialog';
import { LocalService } from '../service/local-service/local.service';
import { PhotoModalComponent } from '../photo-modal/photo-modal.component';

@Component({
  selector: 'app-user-gallery',
  templateUrl: './user-gallery.component.html',
  styleUrls: ['./user-gallery.component.css']
})
export class UserGalleryComponent implements OnInit{

  images: Image[] = [];
  masonryImages: any = []
  limit = 12;

  constructor(private dialogRef: MatDialog, private galleryService: GalleryService, private localStorage: LocalService) {
    this.galleryService.getUsersImages(localStorage.getData("id")).subscribe({
      next: (response: any) => {
        let i;
        for (i = 0; i < response.length; i++) {
          this.images[i] = {
            id: response[i].id,
            picture: 'data:image/jpeg;base64,' + response[i].imageData,
            author: response[i].ownerId,
            category: response[i].category,
            name: response[i].name,
            description: response[i].description,
            date: response[i].date,
            rating: response[i].currentRating
          }
        }
      },
      error: () => { }
    });
  }
  
  ngOnInit() {
		this.masonryImages = this.images;
    this.masonryImages.slice(0, this.limit)
	}

  openDialog(index: number){
    this.dialogRef.open(PhotoModalComponent, {
      data : {
        photo : this.images[index]
      }
    });
  }

  public masonryOptions: NgxMasonryOptions = {
		gutter: 10,
		resize: true,
		initLayout: true,
		fitWidth: true
	};

  // masonryImages = [
  //   {picture: './assets/img/photos/1.jpg'},
  //   {picture: './assets/img/photos/2.jpg'},
  //   {picture: './assets/img/photos/3.jpg'},
  //   {picture: './assets/img/photos/4.jpg'},
  //   {picture: './assets/img/photos/5.jpg'},
  //   {picture: './assets/img/photos/6.jpg'},
  //   {picture: './assets/img/photos/7.jpg'},
  //   {picture: './assets/img/photos/8.jpg'},
  //   {picture: './assets/img/photos/9.jpg'},
  //   {picture: './assets/img/photos/1.jpg'},
  //   {picture: './assets/img/photos/2.jpg'},
  //   {picture: './assets/img/photos/3.jpg'},
  //   {picture: './assets/img/photos/4.jpg'},
  //   {picture: './assets/img/photos/5.jpg'},
  //   {picture: './assets/img/photos/6.jpg'},
  //   {picture: './assets/img/photos/7.jpg'},
  //   {picture: './assets/img/photos/8.jpg'},
  //   {picture: './assets/img/photos/9.jpg'},
  // ]
}

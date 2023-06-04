import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../service/gallery-service/gallery.service';
import { Image } from '../model/image';

@Component({
  selector: 'app-admin-photos',
  templateUrl: './admin-photos.component.html',
  styleUrls: ['./admin-photos.component.css']
})
export class AdminPhotosComponent implements OnInit{
  images: Image[] = [];

  constructor(private galleryService: GalleryService) {
    this.galleryService.getImages().subscribe({
      next: (response: any) => {
        let i;
        for (i = 0; i < response.length; i++) {
          this.images[i] = {
            id: response[i].id,
            picture: 'data:image/jpeg;base64,' + response[i].imageData,
            author: response[i].username,
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

  ngOnInit() {}

  deletePhoto(image: Image) {
    this.galleryService.deleteImageById(image.id).subscribe({
      next: (response: any) => {
        window.location.reload();
      },
      error: (err) => {console.log(err);}
    })
  }

}

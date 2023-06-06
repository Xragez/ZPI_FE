import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../service/gallery-service/gallery.service';


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
            username: response[i].username,
            category: response[i].category,
            name: response[i].name,
            showComments: false,
            comments: response[i].comments
          }
        }
      },
      error: () => { }
    });
  }

  ngOnInit() {}

  msgInfo: string = '';

  deletePhoto(image: Image) {
    this.galleryService.deleteImageById(image.id).subscribe({
      next: (response: any) => {
        window.location.reload();
        this.msgInfo = 'Zdjęcie został usuniety'
      },
      error: (err) => {console.log(err);}
    })
  }

  toggleComments(image: Image) {
    image.showComments = !image.showComments;
    if (image.showComments) {
      this.galleryService.getComments(image.id).subscribe({
        next: (response: any) => {
          image.comments = response.map((comment: { content: string; username: string, id: number, imageId: number }) =>  new Comment(comment.content, comment.username, comment.id, comment.imageId));
        },
        error: (err) => {console.log(err)}
      })
      this.galleryService.getComments(image.id).subscribe(
        (response: any) => {
          console
        },
        (error: any) => {
          console.log(error);
        }
      );
    }
  }

  deleteComment(comment:Comment){
    this.galleryService.deleteImageCommentById(comment.id).subscribe({
      next: (response: any) => {
        this.msgInfo = 'Komentarz został usuniety'
        const image = this.images.find((i) => i.id === comment.imageId);
        if (image){
          image.comments = image.comments.filter((i) => i.id !== comment.id);
        }
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}

class Image {

  constructor(picture: any, author: any, username: any, category: any, id: any, name: any) {
      this.id = id
      this.picture = picture
      this.author = author
      this.username = username
      this.category = category
      this.name = name
      this.showComments = false
      this.comments = [];
  }

  id: any
  picture: any
  author: any
  username: any
  category: any
  name: any
  showComments: boolean;
  comments: Comment[];
}

class Comment {
  constructor(content: String, author: String, id: number, imageId:number) {
    this.content = content;
    this.author = author;
    this.id = id;
    this.imageId = imageId;
  }

  content: String;
  author: String;
  id: number;
  imageId: number;
}
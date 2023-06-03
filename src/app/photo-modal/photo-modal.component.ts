import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GalleryService } from '../service/gallery-service/gallery.service';

@Component({
  selector: 'app-photo-modal',
  templateUrl: './photo-modal.component.html',
  styleUrls: ['./photo-modal.component.css']
})
export class PhotoModalComponent implements OnInit{

  photo: any;
  rating: any;
  comments: Comment[] = [];
  rate = 0;


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private galleryService: GalleryService) {
    console.log(data)
    this.photo = data.photo
    this.rating = this.photo.rating
    this.getComments()
  }

  ngOnInit() {

  }

  commentForm = new FormGroup({
    comment: new FormControl(),
  })

  get newComment() {
    return this.commentForm.get('comment');
  }

  getComments() {
    this.galleryService.getComments(this.photo.id).subscribe({
      next: (response: any) => { 
          this.comments = response.map((comment: {content: String; username: String; }) => new Comment(comment.content, comment.username));
      },
      error: () => { }
    });
  }


  addComments() {
    const content = this.newComment?.value;
    this.galleryService.addComment(content, this.photo.id).subscribe({
      next: (response: any) => {
        this.getComments()
      },
      error: (err) => {console.log(err)}
    })
    this.commentForm.reset();
  }

  
  stars = [1,2,3,4,5];
  // ratings= [
  //   {user_id: 1, rating: 5},
  //   {user_id: 2, rating: 4},
  //   {user_id: 3, rating: 3},
  //   {user_id: 1, rating: 4},
  //   {user_id: 1, rating: 5},
  // ]
  
  // avarageRating(): number{
  //   if(this.ratings.length == 0) {
  //     return 0;
  //   }
    
  //   let totalRating = 0;
  //   for(let i=0; i < this.ratings.length; i++){
  //     totalRating += this.ratings[i].rating;
  //   }
  //   const avarage = totalRating / this.ratings.length;
  //   return Number(avarage.toFixed(2))
  // }

  updateRating(r: any){
    this.rate = r;
    this.galleryService.addRating(this.photo.author, this.photo.id, r).subscribe({
      next: (response: any) => { 
        this.galleryService.getImageById(this.photo.id).subscribe({
          next: (response: any) => { 
              this.rate = response.currentRating
              this.rating = response.currentRating
          },
          error: () => { }
        });
      },
      error: () => { }
    });
  }
}

class Comment {
  constructor(content: String, author: String) {
    this.content = content;
    this.author = author;
  }

  content: String;
  author: String;
}
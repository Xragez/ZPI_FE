import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-photo-modal',
  templateUrl: './photo-modal.component.html',
  styleUrls: ['./photo-modal.component.css']
})
export class PhotoModalComponent implements OnInit{

  photo: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.photo = data.photo;
  }

  ngOnInit() {
    
  }

  commentForm = new FormGroup({
    comment: new FormControl(),
  })

  get newComment() {
    return this.commentForm.get('comment');
  }


  addComments(id: number) {
    //dodac obsługe
  }

  
  stars = [1,2,3,4,5];
  ratings= [
    {user_id: 1, rating: 5},
    {user_id: 2, rating: 4},
    {user_id: 3, rating: 3},
    {user_id: 1, rating: 4},
    {user_id: 1, rating: 5},
  ]
  
  avarageRating(): number{
    if(this.ratings.length == 0) {
      return 0;
    }
    
    let totalRating = 0;
    for(let i=0; i < this.ratings.length; i++){
      totalRating += this.ratings[i].rating;
    }
    const avarage = totalRating / this.ratings.length;
    return Number(avarage.toFixed(2))
  }

  rate = 0;
  updateRating(r: any){
    this.ratings.push({user_id: 3, rating:r})
    this.rate = r;
  }
}

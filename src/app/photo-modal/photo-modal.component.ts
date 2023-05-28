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

  
}

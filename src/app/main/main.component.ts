import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  constructor() {}

  ngOnInit() {
    
  }

  boardForm = new FormGroup({
    message: new FormControl(),
  })

  commentForm = new FormGroup({
    comment: new FormControl(),
  })

  author: string = '';
  message: string = '';

  get newComment() {
    return this.commentForm.get('comment');
  }



  messages = [
    { message: 'In elementum, arcu ac commodo pulvinar, eros magna ultrices felis, sed maximus quam ex sed orci. Mauris eget nisi vitae ex molestie imperdiet. In et euismod nisi.', author: 'Jan Kowal', 
    comment: [
      {content: 'Nam consectetur, nisi eget hendrerit sagittis, nulla eros finibus dui, non tincidunt risus urna sed purus.', author: 'Jan Nowak'},
      {content: 'Nam consectetur, nisi eget hendrerit sagittis, nulla eros finibus dui, non tincidunt risus urna sed purus.', author: 'Eryk Nowak'},
    ], showCommentsFlag: false
  },
    { message: 'In elementum, arcu ac commodo pulvinar, eros magna ultrices felis, sed maximus quam ex sed orci. Mauris eget nisi vitae ex molestie imperdiet. In et euismod nisi.', author: 'Jan Kowal', 
    comment: [
      {content: 'Mauris eget nisi vitae ex molestie imperdiet.', author: 'Ewa Nowak'},
    ], showCommentsFlag: false
  },
    { message: 'In elementum, arcu ac commodo pulvinar, eros magna ultrices felis, sed maximus quam ex sed orci. Mauris eget nisi vitae ex molestie imperdiet. In et euismod nisi.', author: 'Jan Kowal', }
  ];



  sharePost() {

    if(this.message != ''){
      this.messages.push({message: this.message, author: 'Autor TEST'});
      this.boardForm.reset();
    }

  }

  shareComments(postIndex: number){
    
      const comment = {content: this.newComment?.value, author: 'Autor Test', post_id: postIndex + 1};
      this.messages[postIndex]?.comment?.push(comment);
      this.commentForm.reset();

  }


  showCommentsFlag = false;
  showComments( index: number) {

    this.messages[index].showCommentsFlag = !this.messages[index].showCommentsFlag;


  }


}

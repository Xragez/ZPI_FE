import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    
  }

  boardForm = new FormGroup({
    message: new FormControl(),
  })

  author: string = '';
  message: string = '';
  comment: string = '';

  messages = [
    { message: 'In elementum, arcu ac commodo pulvinar, eros magna ultrices felis, sed maximus quam ex sed orci. Mauris eget nisi vitae ex molestie imperdiet. In et euismod nisi.', author: 'Jan Kowal', comment: [
      {content: 'Nam consectetur, nisi eget hendrerit sagittis, nulla eros finibus dui, non tincidunt risus urna sed purus.', author: 'Eryk Nowak'},
      {content: 'Nam consectetur, nisi eget hendrerit sagittis, nulla eros finibus dui, non tincidunt risus urna sed purus.', author: 'Eryk Nowak'},
    ], showCommentsFlag: false
  },
    { message: 'In elementum, arcu ac commodo pulvinar, eros magna ultrices felis, sed maximus quam ex sed orci. Mauris eget nisi vitae ex molestie imperdiet. In et euismod nisi.', author: 'Jan Kowal', comment: [
      {content: 'Nam consectetur, nisi eget hendrerit sagittis, nulla eros finibus dui, non tincidunt risus urna sed purus.', author: 'AUTOR test'}
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

  showCommentsFlag = false;
  showComments( index: number) {

    this.messages[index].showCommentsFlag = !this.messages[index].showCommentsFlag;


  }


}

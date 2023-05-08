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
    { message: 'test', author: 'Jan Kowal', comment: [
      {content: 'Testowy komentarz', author: 'AUTOR test'},
      {content: 'Testowy komentarz 2', author: 'AUTOR test 2'},
    ], showCommentsFlag: false
  },
    { message: 'test2', author: 'Jan Kowal', comment: [
      {content: 'Testowy komentarz', author: 'AUTOR test'}
    ], showCommentsFlag: false
  },
    { message: 'test3', author: 'Jan Kowal', }
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

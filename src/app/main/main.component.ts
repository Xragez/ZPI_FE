import { Component, OnInit  } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  boardForm = new FormGroup({
    message: new FormControl(),
  })


  message: string = '';


  messages: string[] = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet dolor vel ante ornare congue. Morbi sed iaculis ante. Nullam gravida, turpis quis malesuada ornare, orci neque congue tellus, ut eleifend ex eros sed mauris.',
    'Vestibulum sed dolor odio. Pellentesque in lectus porta, feugiat dui sit amet, tristique neque. Nulla ultrices vestibulum eros, vel consectetur nunc dictum consectetur',
    'Curabitur sed molestie mi, at ultricies nunc. Cras malesuada vel purus at tincidunt. Sed libero mauris, facilisis id justo at, ornare vestibulum nibh.'
  ];

  submitPost() {
    
  }

  sharePost() {

    if(this.message != ''){
      this.messages.push(this.message);
      this.boardForm.reset();
    }
    else{
      
    }


  }

  constructor() {}

  ngOnInit() {
    
  }

}

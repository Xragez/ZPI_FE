import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {Router} from "@angular/router";
import {LocalService} from "../service/local-service/local.service";
import {PostService} from "../service/post-service/post.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  messages: Post[] = [];


  constructor(private router: Router, private localStore: LocalService, private postService: PostService) {
    postService.getAllPosts().subscribe({
      next: (response: any) => {
        console.log(response)
        this.messages = response.map((post: { content: String; author: String; }) => new Post(post.content, post.author));
      },
      error: (err) => {console.log(err)}
    })
  }

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

  sharePost() {

    if(this.message != ''){
      this.postService.saveNewPost(this.message).subscribe({
        next: (response: any) => {
          window.location.reload();
        },
        error: (err) => {console.log(err)}
      })
      this.boardForm.reset();
    }

  }

  shareComments(postIndex: number){

      // const comment = {content: this.newComment?.value, author: 'Autor Test', post_id: postIndex + 1};
      // this.messages[postIndex]?.comment?.push(comment);
      // this.commentForm.reset();

  }


  showComments( index: number) {
    // if(this.message?.showCommentsFlag) {
    //   this.messages[index].showCommentsFlag = !this.messages[index].showCommentsFlag;
    //
    // }
  }
}

class Post {
  constructor(content: String, author: String) {
    this.content = content;
    this.author = author;
    this.showCommentsFlag = false
  }

  content: String;
  author: String;
  showCommentsFlag: boolean;
}

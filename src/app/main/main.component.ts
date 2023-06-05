import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {Router} from "@angular/router";
import {LocalService} from "../service/local-service/local.service";
import {PostService} from "../service/post-service/post.service";
import { format } from 'date-fns';
import { formatDate } from "@angular/common";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  
  messages: Post[] = [];
  formattedDate!: String;

  constructor(private router: Router, private localStore: LocalService, private postService: PostService) {
    postService.getAllPosts().subscribe({
      next: (response: any) => {
        console.log(response)
        this.messages = response.map((post: { content: String; author: String; id: number}) => new Post(post.content, post.author, post.id));
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

  addComments(msg: Post){
    console.log(msg)
    const content = this.newComment?.value;
    const postId = msg.id;
    this.postService.addComment(content, postId).subscribe({
      next: (response: any) => {
        this.getComments(msg)
      },
      error: (err) => {console.log(err)}
    })
    this.commentForm.reset();

  }


  showComments(post: Post) {
    post.showCommentsFlag = !post.showCommentsFlag;
    if(post.showCommentsFlag) {
      this.getComments(post);
    }
  }

  getComments(post: Post) {
    this.postService.getComments(post.id).subscribe({
      next: (response: any) => {
        post.comments = response.map((comment: { content: string; username: string; date: string; }) => {
          this.formattedDate = formatDate(comment.date,'dd/MM/yyyy H:mm', 'en-US')
          return new Comment(comment.content, comment.username, this.formattedDate);
        });

      },
      error: (err) => {console.log(err)}
    })
  }



}


class Post {
  constructor(content: String, author: String, id: number) {
    this.id = id
    this.content = content;
    this.author = author;
    this.showCommentsFlag = false
    this.comments = [];
  }

  id: number
  content: String;
  author: String;
  showCommentsFlag: boolean;
  comments: Comment[];
}

class Comment {
  constructor(content: String, author: String,  date: String) {
    this.content = content;
    this.author = author;
    this.date = date;
  }

  content: String;
  author: String;
  date: String
}

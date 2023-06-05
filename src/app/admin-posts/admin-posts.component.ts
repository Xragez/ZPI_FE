import { Component, OnInit } from '@angular/core';
import {PostService} from "../service/post-service/post.service";

@Component({
  selector: 'app-admin-posts',
  templateUrl: './admin-posts.component.html',
  styleUrls: ['./admin-posts.component.css']
})
export class AdminPostsComponent implements OnInit{
  posts : Post[] = [];

  ngOnInit() {
    
  }

  constructor(private postService: PostService) {
    postService.getAllPosts().subscribe({
      next: (response: any) => {
        console.log(response)
        this.posts = response.map((post: { content: String; author: String; id: number}) => new Post(post.content, post.author, post.id));
      },
      error: (err) => {console.log(err)}
    })
      
  }

  msgInfo: string = '';

  deletePost(post: Post) {
    this.postService.deletePost(post.id).subscribe({
      next: (response: any) => {
        window.location.reload();
        this.msgInfo = 'Post został usuniety'
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  toggleComments(post: Post) {
    post.showComments = !post.showComments;
    if (post.showComments) {
      this.postService.getComments(post.id).subscribe({
        next: (response: any) => {
          post.comments = response.map((comment: { content: string; username: string, id: number, postId: number }) =>  new Comment(comment.content, comment.username, comment.id, comment.postId));
        },
        error: (err) => {console.log(err)}
      })
      this.postService.getComments(post.id).subscribe(
        (response: any) => {
          console
        },
        (error: any) => {
          console.log(error);
        }
      );
    }
  }

  deleteComment(comment: Comment){
    this.postService.deletePostCommentById(comment.id).subscribe({
      next: (response: any) => {
        console.log('usunieto:', comment.id)
        const post = this.posts.find((p) => p.id === comment.postId);
        if (post) {
        post.comments = post.comments.filter((c) => c.id !== comment.id);
      }
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}



class Post {
  constructor(content: String, author: String, id: number) {
    this.id = id
    this.content = content;
    this.author = author;
    this.showComments = false;
    this.comments = [];
  }

  id: number
  content: String;
  author: String;
  showComments: boolean;
  comments: Comment[];
}

class Comment {
  constructor(content: String, author: String, id: number, postId:number) {
    this.content = content;
    this.author = author;
    this.id = id;
    this.postId = postId;
  }

  content: String;
  author: String;
  id: number;
  postId: number;
}
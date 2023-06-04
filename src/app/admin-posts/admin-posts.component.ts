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
    this.postService.getAllPosts().subscribe({
      next: (response: any) => {
        let i;
        for (i = 0; i < response.length; i++) {
          this.posts[i] = {
            id: response[i].id,
            content:response[i].content,
            author:response[i].author,
          }
        }
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

}



class Post {
  constructor(content: String, author: String, id: number) {
    this.id = id
    this.content = content;
    this.author = author;
  }

  id: number
  content: String;
  author: String;
}
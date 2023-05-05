import { Component, OnInit } from '@angular/core';
import { NgxMasonryOptions } from 'ngx-masonry';

@Component({
  selector: 'app-user-gallery',
  templateUrl: './user-gallery.component.html',
  styleUrls: ['./user-gallery.component.css']
})
export class UserGalleryComponent implements OnInit{

  public masonryOptions: NgxMasonryOptions = {
		gutter: 10,
		resize: true,
		initLayout: true,
		fitWidth: true
	};

  masonryImages = [
    {picture: './assets/img/photos/1.jpg'},
    {picture: './assets/img/photos/2.jpg'},
    {picture: './assets/img/photos/3.jpg'},
    {picture: './assets/img/photos/4.jpg'},
    {picture: './assets/img/photos/5.jpg'},
    {picture: './assets/img/photos/6.jpg'},
    {picture: './assets/img/photos/7.jpg'},
    {picture: './assets/img/photos/8.jpg'},
    {picture: './assets/img/photos/9.jpg'},
    {picture: './assets/img/photos/1.jpg'},
    {picture: './assets/img/photos/2.jpg'},
    {picture: './assets/img/photos/3.jpg'},
    {picture: './assets/img/photos/4.jpg'},
    {picture: './assets/img/photos/5.jpg'},
    {picture: './assets/img/photos/6.jpg'},
    {picture: './assets/img/photos/7.jpg'},
    {picture: './assets/img/photos/8.jpg'},
    {picture: './assets/img/photos/9.jpg'},
  ]
  limit = 15;



  ngOnInit() {
		this.masonryImages.slice(0, this.limit);
	}
  
}

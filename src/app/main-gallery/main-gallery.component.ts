import { Component, OnInit } from '@angular/core';
import { NgxMasonryOptions } from 'ngx-masonry';
import { MatDialog } from '@angular/material/dialog';
import { PhotoModalComponent } from '../photo-modal/photo-modal.component';


@Component({
  selector: 'app-main-gallery',
  templateUrl: './main-gallery.component.html',
  styleUrls: ['./main-gallery.component.css']
})
export class MainGalleryComponent implements OnInit{

  constructor(private dialogRef: MatDialog,){}

  ngOnInit() {
		
	}

  openDialog(index: number){
    this.dialogRef.open(PhotoModalComponent, {
      data : {
        photo : this.images[index]
      }
    });
  }


  public masonryOptions: NgxMasonryOptions = {
		gutter: 10,
		resize: true,
		initLayout: true,
		fitWidth: true
	};


    limit = 17;
    masonryImages: any;
    images = [
    {picture: './assets/img/photos/1.jpg', author: 'Jan Nowak'},
    {picture: './assets/img/photos/2.jpg', author: 'Jan Nowak'},
    {picture: './assets/img/photos/3.jpg', author: 'Jan Nowak'},
    {picture: './assets/img/photos/4.jpg', author: 'Anna Kowal'},
    {picture: './assets/img/photos/5.jpg', author: 'Jan Nowak'},
    {picture: './assets/img/photos/6.jpg', author: 'Anna Kowal'},
    {picture: './assets/img/photos/7.jpg', author: 'Jan Nowak'},
    {picture: './assets/img/photos/8.jpg', author: 'Jan Nowak'},
    {picture: './assets/img/photos/9.jpg', author: 'Anna Kowal'},
    {picture: './assets/img/photos/1.jpg', author: 'Jan Nowak'},
    {picture: './assets/img/photos/2.jpg', author: 'Jan Nowak'},
    {picture: './assets/img/photos/3.jpg', author: 'Anna Kowal'},
    {picture: './assets/img/photos/4.jpg', author: 'Jan Nowak'},
    {picture: './assets/img/photos/5.jpg', author: 'Jan Nowak'},
    {picture: './assets/img/photos/6.jpg', author: 'Jan Nowak'},
    {picture: './assets/img/photos/7.jpg', author: 'Anna Kowal'},
    {picture: './assets/img/photos/8.jpg', author: 'Jan Nowak'},
    {picture: './assets/img/photos/9.jpg', author: 'Anna Kowal'},
    {picture: './assets/img/photos/9.jpg', author: 'Anna Kowal'},
    {picture: './assets/img/photos/1.jpg', author: 'Jan Nowak'},
    {picture: './assets/img/photos/2.jpg', author: 'Jan Nowak'},
    {picture: './assets/img/photos/3.jpg', author: 'Anna Kowal'},
    {picture: './assets/img/photos/4.jpg', author: 'Jan Nowak'},
    {picture: './assets/img/photos/3.jpg', author: 'Anna Kowal'},
    {picture: './assets/img/photos/4.jpg', author: 'Jan Nowak'},
    {picture: './assets/img/photos/5.jpg', author: 'Jan Nowak'},
    {picture: './assets/img/photos/6.jpg', author: 'Jan Nowak'},
    {picture: './assets/img/photos/7.jpg', author: 'Anna Kowal'},
    {picture: './assets/img/photos/8.jpg', author: 'Jan Nowak'},
    {picture: './assets/img/photos/9.jpg', author: 'Anna Kowal'},
    {picture: './assets/img/photos/9.jpg', author: 'Anna Kowal'},
    {picture: './assets/img/photos/1.jpg', author: 'Jan Nowak'},
    {picture: './assets/img/photos/2.jpg', author: 'Jan Nowak'},
    {picture: './assets/img/photos/3.jpg', author: 'Anna Kowal'},
    {picture: './assets/img/photos/4.jpg', author: 'Jan Nowak'},
    {picture: './assets/img/photos/3.jpg', author: 'Anna Kowal'},
    {picture: './assets/img/photos/4.jpg', author: 'Jan Nowak'},
    {picture: './assets/img/photos/5.jpg', author: 'Jan Nowak'},
    {picture: './assets/img/photos/6.jpg', author: 'Jan Nowak'},
    {picture: './assets/img/photos/7.jpg', author: 'Anna Kowal'},
    {picture: './assets/img/photos/8.jpg', author: 'Jan Nowak'},
    {picture: './assets/img/photos/9.jpg', author: 'Anna Kowal'},
    {picture: './assets/img/photos/9.jpg', author: 'Anna Kowal'},
    {picture: './assets/img/photos/1.jpg', author: 'Jan Nowak'},
    {picture: './assets/img/photos/2.jpg', author: 'Jan Nowak'},
    {picture: './assets/img/photos/3.jpg', author: 'Anna Kowal'},
    {picture: './assets/img/photos/4.jpg', author: 'Jan Nowak'},
  ]
  

  images_length = this.images.length;

  showMoreImages() {
    
    setTimeout(() =>{
      this.limit += 10;
		  this.masonryImages = this.images.slice(0, this.limit);
    },200)

    console.log(this.limit)
	}


  categories = [
    {id: 1, name: 'Portret'},
    {id: 2, name: 'Miasto'},
    {id: 3, name: 'Przyroda'},
    {id: 4, name: 'Noc'}
  ]

}

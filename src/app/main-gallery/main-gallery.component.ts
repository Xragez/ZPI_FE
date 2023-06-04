import { Component, OnInit } from '@angular/core';
import { NgxMasonryOptions } from 'ngx-masonry';
import { MatDialog } from '@angular/material/dialog';
import { PhotoModalComponent } from '../photo-modal/photo-modal.component';
import { GalleryService } from '../service/gallery-service/gallery.service';
import { Image } from '../model/image';

@Component({
  selector: 'app-main-gallery',
  templateUrl: './main-gallery.component.html',
  styleUrls: ['./main-gallery.component.css']
})


export class MainGalleryComponent implements OnInit {
  images: Image[] = [];

  constructor(private dialogRef: MatDialog, private galleryService: GalleryService) {
      this.galleryService.getImages().subscribe({
        next: (response: any) => {
          let i;
          for (i = 0; i < response.length; i++) {
            this.images[i] = {
              id: response[i].id,
              picture: 'data:image/jpeg;base64,' + response[i].imageData,
              author: response[i].ownerId,
              category: response[i].category,
              name: response[i].name,
              description: response[i].description,
              date: response[i].date,
              rating: response[i].currentRating
            }
          }
        },
        error: () => { }
      });
  }

  ngOnInit() {
		this.filterImages();
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
  //   images = [
  //   {picture: './assets/img/photos/1.jpg', author: 'Jan Nowak', category: 1},
  //   {picture: './assets/img/photos/2.jpg', author: 'Jan Nowak', category: 2},
  //   {picture: './assets/img/photos/3.jpg', author: 'Jan Nowak', category: 3},
  //   {picture: './assets/img/photos/4.jpg', author: 'Anna Kowal', category: 4},
  //   {picture: './assets/img/photos/5.jpg', author: 'Jan Nowak', category: 4},
  //   {picture: './assets/img/photos/6.jpg', author: 'Anna Kowal', category: 3},
  //   {picture: './assets/img/photos/7.jpg', author: 'Jan Nowak', category: 2},
  //   {picture: './assets/img/photos/8.jpg', author: 'Jan Nowak', category: 3},
  //   {picture: './assets/img/photos/9.jpg', author: 'Anna Kowal', category: 4},
  //   {picture: './assets/img/photos/1.jpg', author: 'Jan Nowak', category: 1},
  //   {picture: './assets/img/photos/2.jpg', author: 'Jan Nowak', category: 1},
  //   {picture: './assets/img/photos/3.jpg', author: 'Anna Kowal', category: 2},
  //   {picture: './assets/img/photos/4.jpg', author: 'Jan Nowak', category: 1},
  //   {picture: './assets/img/photos/5.jpg', author: 'Jan Nowak', category: 1},
  //   {picture: './assets/img/photos/1.jpg', author: 'Jan Nowak', category: 1},
  //   {picture: './assets/img/photos/2.jpg', author: 'Jan Nowak', category: 2},
  //   {picture: './assets/img/photos/3.jpg', author: 'Jan Nowak', category: 3},
  //   {picture: './assets/img/photos/4.jpg', author: 'Anna Kowal', category: 4},
  //   {picture: './assets/img/photos/5.jpg', author: 'Jan Nowak', category: 4},
  //   {picture: './assets/img/photos/6.jpg', author: 'Anna Kowal', category: 3},
  //   {picture: './assets/img/photos/7.jpg', author: 'Jan Nowak', category: 2},
  //   {picture: './assets/img/photos/8.jpg', author: 'Jan Nowak', category: 3},
  //   {picture: './assets/img/photos/9.jpg', author: 'Anna Kowal', category: 4},
  //   {picture: './assets/img/photos/1.jpg', author: 'Jan Nowak', category: 1},
  //   {picture: './assets/img/photos/2.jpg', author: 'Jan Nowak', category: 1},
  //   {picture: './assets/img/photos/3.jpg', author: 'Anna Kowal', category: 2},
  //   {picture: './assets/img/photos/4.jpg', author: 'Jan Nowak', category: 1},
  //   {picture: './assets/img/photos/5.jpg', author: 'Jan Nowak', category: 1},
  //   {picture: './assets/img/photos/1.jpg', author: 'Jan Nowak', category: 1},
  //   {picture: './assets/img/photos/2.jpg', author: 'Jan Nowak', category: 2},
  //   {picture: './assets/img/photos/3.jpg', author: 'Jan Nowak', category: 3},
  //   {picture: './assets/img/photos/4.jpg', author: 'Anna Kowal', category: 4},
  //   {picture: './assets/img/photos/5.jpg', author: 'Jan Nowak', category: 4},
  //   {picture: './assets/img/photos/6.jpg', author: 'Anna Kowal', category: 3},
  //   {picture: './assets/img/photos/7.jpg', author: 'Jan Nowak', category: 2},
  //   {picture: './assets/img/photos/8.jpg', author: 'Jan Nowak', category: 3},
  //   {picture: './assets/img/photos/9.jpg', author: 'Anna Kowal', category: 4},
  //   {picture: './assets/img/photos/1.jpg', author: 'Jan Nowak', category: 1},
  //   {picture: './assets/img/photos/2.jpg', author: 'Jan Nowak', category: 1},
  //   {picture: './assets/img/photos/3.jpg', author: 'Anna Kowal', category: 2},
  //   {picture: './assets/img/photos/4.jpg', author: 'Jan Nowak', category: 1},
  //   {picture: './assets/img/photos/5.jpg', author: 'Jan Nowak', category: 1},
  // ]
  

  images_length = this.images.length;

  showMoreImages() {
    if(this.selectedCategory != null){
      this.filterImages();
    }
    else{
      setTimeout(() =>{
        this.limit += 10;
        this.masonryImages = this.images.slice(0, this.limit);
      },200)
    }
    
	}


  selectedCategory: number | null = null;
  showSpinnerFlag: boolean = true;
 
  filterImages() {
    if (this.selectedCategory) {
      this.masonryImages = this.images.filter(image => image.category === this.selectedCategory);
      this.showSpinnerFlag = false;
    } else {
      this.masonryImages = this.images;
    }
  }

  
  handleSelection(event: any) {
    console.log(this.selectedCategory)
    this.filterImages();
    console.log(this.selectedCategory)
  }

  showAll(){
    this.selectedCategory = null;
    this.showSpinnerFlag = true;
    this.limit += 10;
    this.masonryImages = this.images.slice(0, this.limit);
  }


  categories = [
    {id: 1, name: 'Portret'},
    {id: 2, name: 'Miasto'},
    {id: 3, name: 'Przyroda'},
    {id: 4, name: 'Noc'}
  ]

}

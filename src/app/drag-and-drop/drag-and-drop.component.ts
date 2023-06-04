import { Component, OnInit ,ViewChild, ElementRef } from '@angular/core';
import { GalleryService } from '../service/gallery-service/gallery.service';
import { LocalService } from '../service/local-service/local.service';
import { Router } from '@angular/router';

@Component({
  selector: 'drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.css']
})
export class DragAndDropComponent /*implements OnInit*/ {
  @ViewChild("fileDropRef")
  fileDropEl!: ElementRef;
  file: any = null;

  constructor(private galleryService: GalleryService, private localStorage: LocalService, private router: Router) {}

  categories = [
    {id: 1, name: 'Portret'},
    {id: 2, name: 'Miasto'},
    {id: 3, name: 'Przyroda'},
    {id: 4, name: 'Noc'}
  ]

  selectedCategory: number | null = null;
  description: any;

  onFileDropped($event: any) {
    this.file = $event[0];
  }

  onSelectFile(e: any) {
    this.file = e.target.files[0];
  }

  deleteFile() {
      this.file = null;
  }

  formatBytes(bytes: any, decimals = 2) {
    if (bytes === 0) {
      return "0 Bytes";
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  upload(): void {
    const uploadImageData = new FormData();
    uploadImageData.append('image', this.file, this.file.name);
    // TODO dodać user id, category id i opis jako zmienne z formularza
    const user_id = this.localStorage.getData("id") + "";
    console.log(user_id)
    console.log(this.selectedCategory)
    console.log(this.description);
    this.galleryService.saveImage(user_id, this.selectedCategory, this.description, uploadImageData).subscribe({
      next: (response: any) => {
        console.log("good");
        this.file = null;
        this.router.navigateByUrl('/user_dashboard/user_gallery');
      },
      error: (err) => {console.log(err)}
    })
  }
}
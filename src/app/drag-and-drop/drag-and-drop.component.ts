import { Component, OnInit ,ViewChild, ElementRef } from '@angular/core';
import { GalleryService } from '../service/gallery-service/gallery.service';

@Component({
  selector: 'drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.css']
})
export class DragAndDropComponent /*implements OnInit*/ {
  @ViewChild("fileDropRef")
  fileDropEl!: ElementRef;
  file: any = null;

  constructor(private galleryService: GalleryService) {}

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
    this.galleryService.saveImage(7, 2, "123", uploadImageData).subscribe({
      next: (response: any) => {
        console.log("good");
        this.file = null;
      },
      error: (err) => {console.log(err)}
    })
  }
}
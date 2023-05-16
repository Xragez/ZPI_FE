import { Component, OnInit } from '@angular/core';
import {LocalService} from "../service/local-service/local.service";
import { User } from '../model/user';
import { UserService } from '../service/user-service/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit{

  user: User = {
    id: 0,
    username: "",
    email:"",
    role: "",
    description: "",
    firstName: "",
    lastName: "",
    avatar: null
  }

  avatarImg: any = null
  
  image: any;

  infoEdit : string = ''
  infoAvatar: string = ''

  editForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  })


  constructor(private localStore: LocalService, private userService: UserService) {
    this.userService.getUserByEmail(this.localStore.getData("email")).subscribe({
      next: (response: any) => {
        this.editForm.setValue({
          firstName: response.firstName + "",
          lastName: response.lastName + "",
          username: response.username + "",
          description: response.description + ""
        });

        this.user.id = response.id;
        this.user.username = response.username;
        this.user.email = response.email;
        this.user.role = response.role;
        this.user.description = response.description;
        this.user.avatar = response.avatar;
        this.avatarImg = 'data:image/jpeg;base64,' + this.user.avatar;
      },
      error: () => { }
    });
  }

  get firstName(){
    return this.editForm.get('firstName');
  }

  get lastName(){
    return this.editForm.get('lastName');
  }

  get username(){
    return this.editForm.get('username');
  }

  get description(){
    return this.editForm.get('description');
  }

  updateUserDetails() {
    if (this.username?.value) {
      this.user.username = this.username?.value;
      this.user.description = this.description?.value + "";
      this.user.firstName = this.firstName?.value + "";
      this.user.lastName = this.lastName?.value + "";

      this.userService.updateUserDetails(this.user).subscribe({
        next: () => {
          this.infoEdit = "Zmiany zostały pomyślnie zapisane!" 
        },
        error: () => {}
      })
    }
  }

  ngOnInit() {
  }


  onSelectFile(e: any) {
    if(e.target.files) {
      this.image = e.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(this.image);
      reader.onload = (event: any) => {
        this.avatarImg  = event.target.result;
      }
    }
  }

  updateAvatar() {
    if (this.user.avatar != null) {
      const uploadImageData = new FormData();
      uploadImageData.append('avatar', this.image, this.avatarImg.name);
      this.userService.updateUserAvatar(this.localStore.getData("id"), uploadImageData).subscribe({
        next: () => {
          this.infoAvatar = "Zdjęcie profilowe zostało pomyślnie zmienione"
        },
        error: () => {}
      })
    }
  }
}

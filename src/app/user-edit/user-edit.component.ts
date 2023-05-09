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
  }

  editForm = new FormGroup({
    username: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  })


  constructor(private localStore: LocalService, private userService: UserService) {
    this.userService.getUserByEmail(this.localStore.getData("email")).subscribe({
      next: (response: any) => {
        this.editForm.setValue({
          username: response.username + "",
          description: response.description + ""
        });

        this.user.id = response.id;
        this.user.username = response.username;
        this.user.email = response.email;
        this.user.role = response.role;
        this.user.description = response.description;
        console.log(response);
      },
      error: () => { }
    });
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
      this.user.description = this.description?.value;

      this.userService.updateUserDetails(this.user).subscribe({
        next: () => {},
        error: () => {}
      })
    }
  }

  ngOnInit() {
  }
  
  url = "./assets/img/img_preview.jpg";

  onSelectFile(e: any){
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.url  = event.target.result;
      }
    }
  }
}

import { Component, OnInit } from '@angular/core';
import {LocalService} from "../service/local-service/local.service";
import { User } from '../model/user';
import { UserService } from '../service/user-service/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit{

  user: User = {
    id: 0,
    username: "username",
    email:"email",
    role: "USER",
    description: "brak"
  }

  constructor(private localStore: LocalService, private userService: UserService) {
    this.userService.getUserByEmail(localStore.getData("email")).subscribe({
      next: (response: any) => {
        this.user.id = response.id;
        this.user.username = response.username;
        this.user.email = response.email;
        this.user.role = response.role;
        this.user.description = response.description;

        console.log(response);
      },
      error: () => {
        
      }
    })
  }

  updateUserDetails() {
    
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

import { Component } from '@angular/core';
import {LocalService} from "../service/local-service/local.service";
import { UserService } from '../service/user-service/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  username: String | null;
  avatar: any;
  
  constructor( private localStore: LocalService, private userService: UserService) {
    this.username = this.localStore.getData('username');
    this.userService.getUserByEmail(localStore.getData("email")).subscribe({
      next: (response: any) => {
        if (response.avatar == null) {
          this.avatar = '/assets/img/img_default.jpg'
        } else {
          this.avatar = 'data:image/jpeg;base64,' + response.avatar;
        }
      },
      error: (error: any) => {
        console.log(error)
      }
    })
  }
}

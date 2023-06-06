import { Component } from '@angular/core';
import {LocalService} from "../service/local-service/local.service";
import { UserService } from '../service/user-service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  username: String | null;
  role: String| null;
  avatar: any;
  
  constructor(private router: Router, private localStore: LocalService, private userService: UserService) {
    this.username = this.localStore.getData('username');
    this.role = this.localStore.getData('role');
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

  logout():void {
    this.localStore.clearData();
    this.router.navigate(['/main']);
  }
}

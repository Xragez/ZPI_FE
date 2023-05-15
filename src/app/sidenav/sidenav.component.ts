import { Component, OnInit } from '@angular/core';
import {LocalService} from "../service/local-service/local.service";
import { UserService } from '../service/user-service/user.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit{

  avatar: any;
  
  constructor(private localStore: LocalService, private userService: UserService) {
    this.userService.getUserByEmail(localStore.getData("email")).subscribe({
      next: (response: any) => {
        this.avatar = 'data:image/jpeg;base64,' + response.avatar;
      },
      error: (error: any) => {
        console.log(error)
      }
    })
  }

  ngOnInit(): void {
  }
}

import { Component, OnInit } from '@angular/core';
import {LocalService} from "../service/local-service/local.service";
import { User } from '../model/user';
import { UserService } from '../service/user-service/user.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit{

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

  constructor(private localStore: LocalService, private userService: UserService) {
    this.userService.getUserByEmail(localStore.getData("email")).subscribe({
      next: (response: any) => {
        this.user.id = response.id;
        this.user.username = response.username;
        this.user.email = response.email;
        this.user.role = response.role;
        this.user.description = response.description;
        this.user.firstName = response.firstName;
        this.user.lastName = response.lastName;
      },
      error: () => {
        
      }
    })
  }

  ngOnInit(): void {

  }

}

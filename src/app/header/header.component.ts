import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import {LocalService} from "../service/local-service/local.service";
import { UserService } from '../service/user-service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  avatar: any;

  constructor(private router: Router, private localStore: LocalService, private userService: UserService) {
    this.userService.getUserByEmail(localStore.getData("email")).subscribe({
      next: (response: any) => {
        this.avatar = 'data:image/jpeg;base64,' + response.avatar;
      },
      error: (error: any) => {
        console.log(error)
      }
    })
  }
  ngOnInit(): void {}

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
}

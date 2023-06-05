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
  username: String | null;

  constructor(private router: Router, private localStore: LocalService, private userService: UserService) {
    this.username = localStore.getData('username');
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

  ngOnInit(): void {}

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
}

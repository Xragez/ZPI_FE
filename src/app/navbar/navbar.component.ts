import { Component } from '@angular/core';
import {LocalService} from "../service/local-service/local.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  username: String | null;
  constructor(private localStore: LocalService) {
    this.username = this.localStore.getData('username');
  }
}

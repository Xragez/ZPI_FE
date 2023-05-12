import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import {LocalService} from "../service/local-service/local.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  username: String | null
  constructor(private router: Router, private localService: LocalService) {
    this.username = localService.getData('username');
  }

  logout():void {
    this.localService.clearData();
    this.router.navigate(['/main']);
  }

  ngOnInit(): void {}

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
}

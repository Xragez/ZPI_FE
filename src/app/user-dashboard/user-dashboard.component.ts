import { Component } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {
  title = 'user-panel-layout';
  sideBarOpen = true;

  constructor() {}

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

 
}

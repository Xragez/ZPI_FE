import { Component, OnInit } from '@angular/core';
import {LocalService} from "../service/local-service/local.service";

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit{

  email: string | null = '';

  constructor(private localStore: LocalService) {
    this.email = localStore.getData("email");
  }

  ngOnInit(): void {

  }

}

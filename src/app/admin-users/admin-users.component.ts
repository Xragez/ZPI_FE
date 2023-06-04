import { Component, OnInit} from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user-service/user.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit{
  users : User [] = [];

  ngOnInit() {
    
  }

  constructor(private userService: UserService) {
    this.userService.getAllUsers().subscribe({
      next: (resposne: any) => {
        let i;
        for( i=0; i < resposne.length; i++){
          this.users[i] = {
            id: resposne[i].id,
            username: resposne[i].username,
            email: resposne[i].email,
            role: resposne[i].role,
            description: resposne[i].description,
            firstName: resposne[i].firstName,
            lastName: resposne[i].lastName,
            avatar: resposne[i].avatar,
          }
        }
      },
      error: (err) => {console.log(err)}
    })
  }

  loginFilter: string = '';

  filterUsers() {
    if (!this.loginFilter) {
      return this.users;
    }
    
    return this.users.filter(user => user.username.toLowerCase().includes(this.loginFilter.toLowerCase()));
  }
}

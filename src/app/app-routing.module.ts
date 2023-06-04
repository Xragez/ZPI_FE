import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { UserGalleryComponent } from './user-gallery/user-gallery.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { MainGalleryComponent } from './main-gallery/main-gallery.component';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminPhotosComponent } from './admin-photos/admin-photos.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminPostsComponent } from './admin-posts/admin-posts.component';

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full' },
  {path: 'main', component: MainComponent },
  {path: 'gallery', component: MainGalleryComponent },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'user_dashboard', component: UserDashboardComponent,
    children: [
      {path: 'home_dashboard', component: DashboardHomeComponent },
      {path: 'user_edit', component: UserEditComponent },
      {path: 'user_gallery', component: UserGalleryComponent},
      {path: 'new_image', component: DragAndDropComponent },
    ]
  },
  {path: 'admin_dashboard', component: AdminDashboardComponent,
    children: [
      {path: 'users', component: AdminUsersComponent},
      {path: 'photos', component: AdminPhotosComponent},
      {path: 'posts', component: AdminPostsComponent}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

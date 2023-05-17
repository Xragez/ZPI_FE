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
      {path: 'user_gallery', component: UserGalleryComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

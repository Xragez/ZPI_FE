import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from "@angular/common/http";
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { UserGalleryComponent } from './user-gallery/user-gallery.component';
import { NgxMasonryModule } from 'ngx-masonry';
import { UserEditComponent } from './user-edit/user-edit.component';
import { MainGalleryComponent } from './main-gallery/main-gallery.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PhotoModalComponent } from './photo-modal/photo-modal.component'
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';
import { DndDirective } from './directives/dnd.directive';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminPhotosComponent } from './admin-photos/admin-photos.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminPostsComponent } from './admin-posts/admin-posts.component';
import {AuthGuard} from "./guards/auth.guard";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    MainComponent,
    UserDashboardComponent,
    SidenavComponent,
    HeaderComponent,
    DashboardHomeComponent,
    UserGalleryComponent,
    UserEditComponent,
    MainGalleryComponent,
    PhotoModalComponent,
    DragAndDropComponent,
    DndDirective,
    AdminDashboardComponent,
    AdminPhotosComponent,
    AdminUsersComponent,
    AdminPostsComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    NgxMasonryModule,
    HttpClientModule,
    MatDialogModule,
    InfiniteScrollModule,
    MatProgressSpinnerModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

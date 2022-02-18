import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {environment} from "src/environments/environment";
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {LoggedInGuard} from './logged-in.guard';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MenuComponent } from './menu/menu.component';
import { ProfileComponent } from './profile/profile.component';
import { ResourceSearchComponent } from './resource-search/resource-search.component';
import { RegisterStaffComponent } from './register-staff/register-staff.component';
import { VolunteerMenuComponent } from './volunteer-menu/volunteer-menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ResourceDatabaseComponent } from './resource-database/resource-database.component';
import { RdbresourceService} from './services/rdbresource.service';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    MenuComponent,
    ProfileComponent,
    ResourceSearchComponent,
    RegisterStaffComponent,
    VolunteerMenuComponent,
    ResourceDatabaseComponent,
    NotFoundComponent,
    NavbarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    NgbModule,
    CommonModule

  ],
  providers: [{ provide: LoggedInGuard, useClass: LoggedInGuard}, RdbresourceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

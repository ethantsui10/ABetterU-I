import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {AngularFirestore} from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private AuthService: AuthenticationService) { }

  ngOnInit(): void{
  }

  async logout(): Promise<boolean> {
    return await this.AuthService.logout();
  }



}

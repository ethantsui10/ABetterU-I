import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable} from 'rxjs';

import {AuthenticationService} from './authentication.service';
import {AngularFirestore} from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {
  constructor(private authService: AuthenticationService, private router: Router, private fireAuth: AngularFireAuth) {}

  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return  this.authService.isLoggedIn();
  //   if (this.authService.isLoggedIn()) {return true; }
  //   this.authService.redirectUrl = state.
  //   this.router.navigate(['./']);
  //   return false;
  // }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
        // const currentUser = this.authService.getUser();
        // if(currentUser){
        //   return true;
        // }
        //
        // if(currentUser == null){
        //     this.authService.redirectUrl = state.url;
        //     this.router.navigate(['/']);
        //   return false;
        // }




         if (this.router.url ==='/logout' || this.router.url === '/' && this.authService.getUser()==null){

           // console.log('logged out');
           this.router.navigate(['/']);
           return false
         }
         else if (this.authService.getUser() != null) { // determine if the user is logged in from this method.
            // this.router.navigate(['/']);
            return true;
         }
         else{
           this.authService.redirectUrl = state.url;
           this.router.navigate(['/']);
           return false;
         }

     }

  // canActivate() {
  //     var user = this.fireAuth.currentUser;
  //     console.log(user);
  //     if(user!=null){
  //       return true;
  //     }else{
  //       this.router.navigate(['/']);
  //       return false;
  //     }
  //   }


}

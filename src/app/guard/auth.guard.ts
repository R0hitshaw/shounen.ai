// auth.guard.ts

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot): boolean {
   
    if (sessionStorage.getItem('token')) {
      return true; // Allow access to the route
    } else {
      alert('This Page is Restricted.')
      this.router.navigate(['/lp']); // Redirect to the login page or any desired route
      return false; // Prevent access to the route
    }
  }
}



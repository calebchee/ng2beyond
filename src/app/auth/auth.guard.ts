import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

    canActivate() {
        if (this.auth.loggedIn()) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;
    }
}
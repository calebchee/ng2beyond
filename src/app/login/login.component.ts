import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth/auth.service';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    error = '';

    constructor(
        private router: Router,
        private auth: AuthService) { }

    ngOnInit() {
        // reset login status
        this.auth.logout();
    }

    login() {
        this.loading = true;
        this.auth.login(this.model.username, this.model.password)
            .subscribe(result => {
                if (result === true) {
                    this.router.navigate(['/']);
                } else {
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            });
    }
}


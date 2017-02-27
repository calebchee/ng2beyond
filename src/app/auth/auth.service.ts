import { Injectable }      from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import { URLSearchParams } from "@angular/http"

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthService {
    public token: string;

    constructor(private http: Http) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

 /*   login(username: string, password: string) {
        let data = new URLSearchParams();
        data.append('username', username);
        data.append('password', password);

        this.http.post('http://localhost:3000/api/authenticate', data)
        .map(res => res.json())
        .subscribe(
            // We're assuming the response will be an object
            // with the JWT on an id_token key
            data => localStorage.setItem('id_token', data.token),
            error => console.log(error)
        );
    }
*/

    login(username: string, password: string): Observable<boolean> {

        let data = new URLSearchParams();
        data.append('username', username);
        data.append('password', password);

        return this.http.post('http://localhost:3000/api/authenticate', data)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().token;
                if (token) {
                    // set token property
                    this.token = token;
                    localStorage.setItem('id_token', token);

                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('id_token');
    }

    loggedIn(): boolean {
        return tokenNotExpired();
    }   


}

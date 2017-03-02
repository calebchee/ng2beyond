import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
//import { HttpService } from '../auth/http.service';
import { AuthService } from './auth.service';
import { User } from './user';

@Injectable()
export class UserService {
    constructor(
        private http: Http,
        private authenticationService: AuthService) {
    }

    getUsers(): Observable<User[]> {

        var jwt = localStorage.getItem('id_token');
        var authHeader = new Headers();
        if(jwt) {
            authHeader.append('Authorization', jwt);      
            console.log(jwt)
        }       

        // get users from api
        return this.http.get('http://localhost:3000/api/users' ,{
            headers: authHeader
        })
        .map((response: Response) => response.json()); 
    }
}
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http';
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
        }       

        // get users from api
        return this.http.get('http://ng2nodejs.azurewebsites.net/api/users' , {
            headers: authHeader
        })
        .map((response: Response) => response.json()); 
    }

    getUser(username: string) : Observable<User> {
        console.log('calling')
        var jwt = localStorage.getItem('id_token');
        var authHeader = new Headers();
        if(jwt) {
            authHeader.append('Authorization', jwt);      
        }
        
        let data = new URLSearchParams();
        data.append('username', username);

        return this.http.post('http://ng2nodejs.azurewebsites.net/api/user', data , {
            headers: authHeader
        })
        .map(res => res.json())
    }
}


import { Component } from '@angular/core';
import { User } from '../auth/user';
import { UserService } from '../auth/user.service';

@Component({
  moduleId: module.id,
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  
})
export class FirstComponent {
    constructor(private userService: UserService) { }
  
    locations = ['Melbourne', 'Sydney', 'Adelaide', 'Perth'];
    model =  new User().fromJSON({"username":"XXXXX","password":"xxx","firstname":"asdasd","lastname":"sds"});

    submmitted = false;
    

   getUser() {             
         this.userService
            .getUser(localStorage.getItem('username'))
            .subscribe((user: Object) => {
                 this.model = new User().fromJSON(user)[0]; 
            });

    }

    get diagnostic() { return JSON.stringify(this.model); }

}


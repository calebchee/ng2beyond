import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [AuthService]
})
export class MenuComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }
 
}

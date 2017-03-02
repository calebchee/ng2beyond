import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { UserService } from './auth/user.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FirstComponent,
    SecondComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    AuthGuard,
    AuthService,
    UserService,

    // providers used to create fake backend
    //fakeBackendProvider,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

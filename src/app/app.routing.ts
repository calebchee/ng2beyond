import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'first', component: FirstComponent, canActivate: [AuthGuard] },
    { path: 'second', component: SecondComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
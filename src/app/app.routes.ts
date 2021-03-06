import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TodayComponent } from './components/today/today.component';
import { ListComponent } from './components/list/list.component';
import { AdvisesComponent } from './components/advises/advises.component';
import { MoreComponent } from './components/more/more.component';
import { Error404Component } from './components/error404/error404.component';
import { ContributeComponent } from './components/contribute/contribute.component';
import { PrivateComponent } from './components/private/private.component';
import { LoginComponent } from './components/login/login.component';
import { AppGuard } from './app.guard';

export const ROUTES: Routes = [
    {
        path: 'presentation',
        component: HomeComponent
    },
    {
        path: 'today',
        component: TodayComponent
    },
    {
        path: 'list',
        component: ListComponent
    },
    {
        path: 'advises',
        component: AdvisesComponent
    },
    {
        path: 'more',
        component: MoreComponent
    },
    {
        path: 'contribute',
        component: ContributeComponent
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'private',
        component: PrivateComponent,
        canActivate: [AppGuard]        
    },
    {
        path: '',
        redirectTo: '/today',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: Error404Component
    },
];
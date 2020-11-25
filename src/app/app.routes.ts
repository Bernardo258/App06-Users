import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { SearchComponent } from './components/search/search.component';

export const ROUTES: Routes = [
    {path: 'users/:id', component: UsersComponent},
    {path: 'home', component: HomeComponent},
    {path: 'search', component: SearchComponent},
    {path: '', pathMatch: 'full', redirectTo: 'home'}
];

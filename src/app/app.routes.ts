import { Routes } from '@angular/router';
import { ListComponent } from './list/list/list.component';

export const routes: Routes = [
    {path: '', redirectTo: 'users', pathMatch: 'full'},
    {path: "users", component: ListComponent},
];

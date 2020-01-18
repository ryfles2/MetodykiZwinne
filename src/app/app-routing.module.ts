import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/general/home/home.component';
import { Errno404Component } from './modules/error/errno404/errno404.component';
import { ManagementComponent } from './modules/admin/management/management.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'error', component: Errno404Component},
  {path: 'showLoginPanel', component: HomeComponent},
  {path: 'admin', component: ManagementComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

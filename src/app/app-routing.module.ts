import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { LoginPage } from './login/login.page';
import { ApprovedComponent } from './approved/approved.component';
import { DeclineComponent } from './decline/decline.component';


const routes: Routes = [
  {path: '' , component: LoginPage},
  {path: 'Login' , component: LoginPage},
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'home/:id', loadChildren: './home/home.module#HomePageModule' },
  { path: 'profiledetail/:id/:name', loadChildren: './profile-detail/profile-detail.module#ProfileDetailPageModule' },
  { path: 'Approved' , component: ApprovedComponent},
  { path: 'Decline' , component: DeclineComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

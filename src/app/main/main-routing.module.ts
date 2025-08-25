import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path:'',
    component:MainComponent,
    children:[
      {
        path:'home',
        loadChildren: () =>
          import('./home/home.module').then(
            m => m.HomeModule
          )
      },
      {
        path:'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then(
            m => m.DashboardModule
          )
      },
      {
        path:'contact',
        loadChildren: () =>
          import('./contact/contact.module').then(
            m => m.ContactModule
          )
      },
      {path:'profile',component:ProfileComponent},
      { path:"**" , redirectTo:'home' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }

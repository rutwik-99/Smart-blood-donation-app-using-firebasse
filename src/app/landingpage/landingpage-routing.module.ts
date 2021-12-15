import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingpagePage } from './landingpage.page';

const routes: Routes = [
  {
    path: '',
    component: LandingpagePage
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'patientreg',
    loadChildren: () => import('./patientreg/patientreg.module').then( m => m.PatientregPageModule)
  },
  {
    path: 'donorreg',
    loadChildren: () => import('./donorreg/donorreg.module').then( m => m.DonorregPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingpagePageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },
  {
    path: 'donoraccount',
    loadChildren: () => import('./donoraccount/donoraccount.module').then( m => m.DonoraccountPageModule)
  },
  {
    path: 'patientaccount',
    loadChildren: () => import('./patientaccount/patientaccount.module').then( m => m.PatientaccountPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}

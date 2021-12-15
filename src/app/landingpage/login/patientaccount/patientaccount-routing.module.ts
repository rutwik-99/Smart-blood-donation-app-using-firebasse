import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientaccountPage } from './patientaccount.page';

const routes: Routes = [
  {
    path: '',
    component: PatientaccountPage
  },
  {
    path: 'patientdetails',
    loadChildren: () => import('./patientdetails/patientdetails.module').then( m => m.PatientdetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientaccountPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientdetailsPage } from './patientdetails.page';

const routes: Routes = [
  {
    path: '',
    component: PatientdetailsPage
  },
  {
    path: 'patientexpand',
    loadChildren: () => import('./patientexpand/patientexpand.module').then( m => m.PatientexpandPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientdetailsPageRoutingModule {}

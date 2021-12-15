import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientexpandPage } from './patientexpand.page';

const routes: Routes = [
  {
    path: '',
    component: PatientexpandPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientexpandPageRoutingModule {}

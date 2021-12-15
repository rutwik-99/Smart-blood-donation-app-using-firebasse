import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientregPage } from './patientreg.page';

const routes: Routes = [
  {
    path: '',
    component: PatientregPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientregPageRoutingModule {}

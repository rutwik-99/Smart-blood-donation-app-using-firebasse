import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonorregPage } from './donorreg.page';

const routes: Routes = [
  {
    path: '',
    component: DonorregPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonorregPageRoutingModule {}

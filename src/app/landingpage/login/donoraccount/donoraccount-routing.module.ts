import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonoraccountPage } from './donoraccount.page';

const routes: Routes = [
  {
    path: '',
    component: DonoraccountPage
  },
  {
    path: 'donordetails',
    loadChildren: () => import('./donordetails/donordetails.module').then( m => m.DonordetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonoraccountPageRoutingModule {}

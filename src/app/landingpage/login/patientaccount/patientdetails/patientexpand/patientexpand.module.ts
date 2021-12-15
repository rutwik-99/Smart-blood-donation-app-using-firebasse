import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientexpandPageRoutingModule } from './patientexpand-routing.module';

import { PatientexpandPage } from './patientexpand.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientexpandPageRoutingModule
  ],
  declarations: [PatientexpandPage]
})
export class PatientexpandPageModule {}

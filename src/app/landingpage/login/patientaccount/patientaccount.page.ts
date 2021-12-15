import { Component, OnInit } from '@angular/core';
import { LandingpageService } from 'src/app/landingpage/landingpage.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-patientaccount',
  templateUrl: './patientaccount.page.html',
  styleUrls: ['./patientaccount.page.scss'],
})
export class PatientaccountPage implements OnInit {
  data: any = [];
  constructor(private some: LandingpageService, private AlertCrtl: AlertController) { }

  ngOnInit() {
    this.data = this.some.get_patient_data();
    console.log(this.data);
  }

  search_patient_account(){
    this.some.search_patient_login().subscribe();
  }
  edit() {
    this.some.patient_edit();
  }
}

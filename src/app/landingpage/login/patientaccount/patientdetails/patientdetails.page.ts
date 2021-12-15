import { Component, OnInit } from '@angular/core';
import { LandingpageService } from 'src/app/landingpage/landingpage.service';
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-patientdetails',
  templateUrl: './patientdetails.page.html',
  styleUrls: ['./patientdetails.page.scss'],
})
export class PatientdetailsPage implements OnInit {

  data: any = [];

  constructor(private some: LandingpageService, private AlertCrtl: AlertController) { }

  ngOnInit() {
    this.data = this.some.get_patient_data();
    console.log(this.data);
  }
  onSubmit(f: NgForm) {
    this.AlertCrtl.create({
      header: 'Do you want to submit ?',
      message: 'Check your details before submitting',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Update',
          handler: () => {
            console.log('Profile updated');
            this.some.update_patientAccount(f);
          }
        }
      ]
    }).then(alertEl => {
      alertEl.present();
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { LandingpageService } from '../landingpage.service';
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-patientreg',
  templateUrl: './patientreg.page.html',
  styleUrls: ['./patientreg.page.scss'],
})
export class PatientregPage implements OnInit {

  constructor(private some: LandingpageService, private AlertCrtl: AlertController) { }

  ngOnInit() {
  }
  onCheck() {
    this.some.check('Patient reg');
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
          text: 'Submit',
          handler: () => {
            this.some.submit_patient(f);
          }
        }
      ]
    }).then(alertEl => {
      alertEl.present();
    });
  }
}

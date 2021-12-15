import { Component, OnInit } from '@angular/core';
import { LandingpageService } from '../landingpage.service';
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-donorreg',
  templateUrl: './donorreg.page.html',
  styleUrls: ['./donorreg.page.scss'],
})
export class DonorregPage implements OnInit {

  constructor(private some: LandingpageService, private AlertCrtl: AlertController) { }

  ngOnInit() {
  }
  onCheck() {
    this.some.check('Donor reg');
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
            this.some.submit_donor(f);
          }
        }
      ]
    }).then(alertEl => {
      alertEl.present();
    });
  }
}

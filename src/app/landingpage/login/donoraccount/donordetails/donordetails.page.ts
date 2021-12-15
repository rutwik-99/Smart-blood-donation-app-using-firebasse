import { Component, OnInit } from '@angular/core';
import { LandingpageService } from 'src/app/landingpage/landingpage.service';
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-donordetails',
  templateUrl: './donordetails.page.html',
  styleUrls: ['./donordetails.page.scss'],
})
export class DonordetailsPage implements OnInit {

  data: any = [];

  constructor(private some: LandingpageService, private AlertCrtl: AlertController) { }

  ngOnInit() {
    this.data = this.some.get_donor_data();
    console.log(this.data);
  }
  onSubmit_Donor(f: NgForm) {
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
            this.some.update_DonorAccount(f);
          }
        }
      ]
    }).then(alertEl => {
      alertEl.present();
    });
  }

}

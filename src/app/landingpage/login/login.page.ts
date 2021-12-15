import { Component, OnInit } from '@angular/core';
import { LandingpageService } from '../landingpage.service';
import { NgForm } from '@angular/forms';
import { Dinfo } from '../donor_info.model';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private some: LandingpageService, private router: Router,private AlertCrtl: AlertController) { }
  private data: any = [];
  private data1: Dinfo;

  ngOnInit() {
  }
  onCheck() {
    this.some.check_login('Login').subscribe();
  }
  onSubmit(f: NgForm) {
    this.AlertCrtl.create({
      header: 'Login as ',
      message: 'Select one',
      buttons: [
        {
          text: 'Donor',
          handler: () => {
            this.some.submit_login_donor(f).subscribe();
          }
        },
        {
          text: 'Patient',
          handler: () => {
            this.some.submit_login_patient(f).subscribe();
          }
        }
      ]
    }).then(alertEl => {
      alertEl.present();
    });
    // this.router.navigate(['landingpage/login/detailspage']);
    // this.data1 = this.some.test();
    // console.log(this.data);
  }
}

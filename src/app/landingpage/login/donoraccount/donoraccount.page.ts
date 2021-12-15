import { Component, OnInit } from '@angular/core';
import { LandingpageService } from 'src/app/landingpage/landingpage.service';

@Component({
  selector: 'app-donoraccount',
  templateUrl: './donoraccount.page.html',
  styleUrls: ['./donoraccount.page.scss'],
})
export class DonoraccountPage implements OnInit {

  data: any = [];

  constructor(private some: LandingpageService) { }

  ngOnInit() {
    this.data = this.some.get_donor_data();
    console.log(this.data);
  }
  edit() {
    this.some.donor_edit();
  }
}

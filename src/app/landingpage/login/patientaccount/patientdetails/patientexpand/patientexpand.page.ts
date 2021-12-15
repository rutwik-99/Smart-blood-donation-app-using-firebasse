import { Component, OnInit } from '@angular/core';
import { LandingpageService } from 'src/app/landingpage/landingpage.service';

@Component({
  selector: 'app-patientexpand',
  templateUrl: './patientexpand.page.html',
  styleUrls: ['./patientexpand.page.scss'],
})
export class PatientexpandPage implements OnInit {

  dict: any = [];
  objectKeys:any=[];
  dict_expand:any=[];
  objectKeys_expand:any=[];
  dict_expand_10:any=[];
  objectKeys_expand_10:any=[];
  count:any = 0;

  constructor(private some: LandingpageService) { }

  ngOnInit() {
    this.count = 0;
    this.dict= this.some.get_donor_search();
    this.objectKeys = this.some.get_donor_keys();
    console.log(this.dict);
    console.log(this.objectKeys);
  }

  expand(){
    this.count = this.count+1;
    this.some.search_patient_expand(this.count).subscribe();
    this.dict_expand= this.some.get_donor_searchExpand();
    this.objectKeys_expand = this.some.get_donor_keysExpand();
    console.log(this.dict_expand);
    console.log(this.objectKeys_expand);
    console.log(this.count);
  }

  expand_10(){
    this.count = this.count+1;
    this.some.search_patient_expand_10(this.count).subscribe();
    this.dict_expand_10= this.some.get_donor_searchExpand_10();
    this.objectKeys_expand_10 = this.some.get_donor_keysExpand_10();
    console.log(this.dict_expand_10);
    console.log(this.objectKeys_expand_10);
    console.log(this.count);
  }

}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PatientaccountPage } from './patientaccount.page';

describe('PatientaccountPage', () => {
  let component: PatientaccountPage;
  let fixture: ComponentFixture<PatientaccountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientaccountPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PatientaccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

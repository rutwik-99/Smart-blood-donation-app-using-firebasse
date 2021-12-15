import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PatientexpandPage } from './patientexpand.page';

describe('PatientexpandPage', () => {
  let component: PatientexpandPage;
  let fixture: ComponentFixture<PatientexpandPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientexpandPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PatientexpandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

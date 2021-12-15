import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PatientregPage } from './patientreg.page';

describe('PatientregPage', () => {
  let component: PatientregPage;
  let fixture: ComponentFixture<PatientregPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientregPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PatientregPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DonorregPage } from './donorreg.page';

describe('DonorregPage', () => {
  let component: DonorregPage;
  let fixture: ComponentFixture<DonorregPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonorregPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DonorregPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

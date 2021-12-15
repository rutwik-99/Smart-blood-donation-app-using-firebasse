import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DonordetailsPage } from './donordetails.page';

describe('DonordetailsPage', () => {
  let component: DonordetailsPage;
  let fixture: ComponentFixture<DonordetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonordetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DonordetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

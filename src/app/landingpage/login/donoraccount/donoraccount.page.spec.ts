import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DonoraccountPage } from './donoraccount.page';

describe('DonoraccountPage', () => {
  let component: DonoraccountPage;
  let fixture: ComponentFixture<DonoraccountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonoraccountPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DonoraccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

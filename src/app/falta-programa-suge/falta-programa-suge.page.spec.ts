import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FaltaProgramaSugePage } from './falta-programa-suge.page';

describe('FaltaProgramaSugePage', () => {
  let component: FaltaProgramaSugePage;
  let fixture: ComponentFixture<FaltaProgramaSugePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FaltaProgramaSugePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FaltaProgramaSugePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

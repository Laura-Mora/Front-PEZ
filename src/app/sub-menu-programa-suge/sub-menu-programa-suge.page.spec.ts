import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubMenuProgramaSugePage } from './sub-menu-programa-suge.page';

describe('SubMenuProgramaSugePage', () => {
  let component: SubMenuProgramaSugePage;
  let fixture: ComponentFixture<SubMenuProgramaSugePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SubMenuProgramaSugePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubMenuProgramaSugePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

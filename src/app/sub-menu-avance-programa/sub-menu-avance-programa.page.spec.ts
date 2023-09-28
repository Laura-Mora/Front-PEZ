import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubMenuAvanceProgramaPage } from './sub-menu-avance-programa.page';

describe('SubMenuAvanceProgramaPage', () => {
  let component: SubMenuAvanceProgramaPage;
  let fixture: ComponentFixture<SubMenuAvanceProgramaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SubMenuAvanceProgramaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubMenuAvanceProgramaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

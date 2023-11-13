import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { SugeAsignaturasPage } from './suge-asignaturas.page';

describe('SugeAsignaturasPage', () => {
  let component: SugeAsignaturasPage;
  let fixture: ComponentFixture<SugeAsignaturasPage>;

  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SugeAsignaturasPage ],
      imports: [IonicModule.forRoot(),RouterTestingModule.withRoutes([]),HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(SugeAsignaturasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();

    httpMock = TestBed.get(HttpTestingController);
    httpClient = TestBed.inject(HttpClient)
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

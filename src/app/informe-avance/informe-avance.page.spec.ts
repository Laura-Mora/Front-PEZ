import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { InformeAvancePage } from './informe-avance.page';

describe('InformeAvancePage', () => {
  let component: InformeAvancePage;
  let fixture: ComponentFixture<InformeAvancePage>;

  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InformeAvancePage ],
      imports: [IonicModule.forRoot(),RouterTestingModule.withRoutes([]),HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(InformeAvancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();

    httpMock = TestBed.get(HttpTestingController);
    httpClient = TestBed.inject(HttpClient)
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

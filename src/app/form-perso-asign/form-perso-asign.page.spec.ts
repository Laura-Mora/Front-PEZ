import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { FormPersoAsignPage } from './form-perso-asign.page';

describe('FormPersoAsignPage', () => {
  let component: FormPersoAsignPage;
  let fixture: ComponentFixture<FormPersoAsignPage>;

  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPersoAsignPage ],
      imports: [IonicModule.forRoot(),RouterTestingModule.withRoutes([]), HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(FormPersoAsignPage);
    component = fixture.componentInstance;
    fixture.detectChanges();

    httpMock = TestBed.get(HttpTestingController);
    httpClient = TestBed.inject(HttpClient)
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

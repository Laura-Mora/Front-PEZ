import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { FaltaProgramaSugePage } from './falta-programa-suge.page';

describe('FaltaProgramaSugePage', () => {
  let component: FaltaProgramaSugePage;
  let fixture: ComponentFixture<FaltaProgramaSugePage>;

  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FaltaProgramaSugePage ],
      imports: [IonicModule.forRoot(),RouterTestingModule.withRoutes([]),HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(FaltaProgramaSugePage);
    component = fixture.componentInstance;
    fixture.detectChanges();

    httpMock = TestBed.get(HttpTestingController);
    httpClient = TestBed.inject(HttpClient)
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

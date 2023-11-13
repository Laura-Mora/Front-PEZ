import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { FaltaProgramaPage } from './falta-programa.page';

describe('FaltaProgramaPage', () => {
  let component: FaltaProgramaPage;
  let fixture: ComponentFixture<FaltaProgramaPage>;

  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FaltaProgramaPage ],
      imports: [IonicModule.forRoot(),RouterTestingModule.withRoutes([]), HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(FaltaProgramaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();

    httpMock = TestBed.get(HttpTestingController);
    httpClient = TestBed.inject(HttpClient)
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

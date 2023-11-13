import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { OpinionesAsignaturaPage } from './opiniones-asignatura.page';

describe('OpinionesAsignaturaPage', () => {
  let component: OpinionesAsignaturaPage;
  let fixture: ComponentFixture<OpinionesAsignaturaPage>;

  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OpinionesAsignaturaPage ],
      imports: [IonicModule.forRoot(),RouterTestingModule.withRoutes([]),HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(OpinionesAsignaturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();

    httpMock = TestBed.get(HttpTestingController);
    httpClient = TestBed.inject(HttpClient)
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

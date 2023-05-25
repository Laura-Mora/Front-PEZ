import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NetService } from './net.service';
import { HttpClient } from '@angular/common/http';

describe('NetService', () => {
  let service: NetService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [ NetService ]
    });
    service = TestBed.inject(NetService);
    httpMock = TestBed.get(HttpTestingController);
    httpClient = TestBed.inject(HttpClient)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

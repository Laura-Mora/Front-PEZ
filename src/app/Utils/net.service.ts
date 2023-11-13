import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, switchMap } from 'rxjs/operators';
import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class NetService {

  constructor(private http: HttpClient) { }

  options(url: string): Observable<any> {
    return this.http.options(url);
  }

  public get<T>(url: string): Observable<T> {
    console.log('get:', url);
    
    return this.options(url).pipe(
      switchMap(() => {
        return this.http.get<T>(url, {
          responseType: 'json',
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            Accept: 'application/json'
          }),
          withCredentials: true
        });
      }),
      catchError(this.handleError)
    );
  }
  

  public post<T>(url: string, data: T): Observable<T> {
    console.log('post:', url);
    return this.http
      .post<T>(url, data, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }),
        withCredentials: true
      })
      .pipe(
        // retry(5),
        catchError(this.handleError)
      );
  }

  public put<T>(url: string, data: T): Observable<T> {
    console.log('put:', url);
    console.log(data);
    return this.http.put<T>(
      url,
      data,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }),
        withCredentials: true
      }
    ).pipe(
      // retry(5),
      catchError(this.handleError)
    );
  }

  public handleError(error: HttpErrorResponse): Observable<any> {
    console.log(error);
    return throwError('An error has occurred');
  }
}

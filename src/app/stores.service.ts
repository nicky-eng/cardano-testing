import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class StoresService {

  constructor(private http: HttpClient) { }

  private storesUrl = 'http://example.com:81/';
  // private storesUrl = 'https://testing-cardano-back.herokuapp.com/stores/?format=json';
  // private storesUrl = 'https://cardano-directory-back.herokuapp.com/stores/?format=json';

  getStores(url: string): Observable<any> {
    const currentUrl = url ?? this.storesUrl

    return this.http.get(currentUrl).pipe(
      catchError((err) => {
        debugger;
        if (err.status === 0) {
          debugger;
          return this.getStores(url)
        } else {
          console.log('error caught in service')
          console.error(err);
          return throwError(err);
        }
      })
    )
  }


}

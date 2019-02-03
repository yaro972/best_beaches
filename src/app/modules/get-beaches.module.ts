import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Beach} from '../models/beach';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class GetBeachesModule {
  private beachesUrl = environment.beachUrl;  // URL to web api

  constructor(
    private http: HttpClient
  ) {
  }

  getBeaches(): Observable<Beach[]> {
    return this.http.get<Beach[]>(this.beachesUrl).pipe(
      tap(ev => {
          if (!environment.production) {
            console.log('getbeaches', ev);
          }
        }
      )
    );
  }

}

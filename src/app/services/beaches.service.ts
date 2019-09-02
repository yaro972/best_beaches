import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Beach} from '../models/beach';
import {BEACHES} from '../beach.mock';
import {find, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BeachesService {

  constructor() {
  }

  getBeaches(): Observable<Beach[]> {
    return of(BEACHES);
  }

  getBeach(id: number) {
    return this.getBeaches().pipe(
      tap(x => console.log(`--- ${x}`)),
      find((beach, index) =>
        beach[index].id === id
      )
    );
  }


}


import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Beach} from '../../../models/beach';
import {catchError, tap} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MessageService} from '../message.service/message.service';

@Injectable({
  providedIn: 'root'
})
export class BeachesService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  private beachUrl = 'api/beaches';

  constructor(private http: HttpClient,
              private messageService: MessageService
  ) {
  }

  public getBeaches(): Observable<Beach[]> {
    return this.http.get<Beach[]>(this.beachUrl)
      .pipe(
        tap(_ => this.log('fetched beaches')),
        catchError(this.handleError<Beach[]>('getBeaches', []))
      );
  }

  public getBeach(id: number) {
    const url = `${this.beachUrl}/${id}`;
    return this.http.get<Beach>(url).pipe(
      tap(_ => this.log(`fetched beach id=${id}`)),
      catchError(this.handleError<Beach>(`getHero id=${id}`))
    );
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`BeachService: ${message}`);


  }
}


import { Injectable } from '@angular/core';
import { Joke } from '../models/joke.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const JOKE_JSON_FILE_URL    = 'assets/jokes.json';
const SEND_JOKE_BY_MAIL_URL = 'php/sendJokeByMail.php';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  private jokes: Promise<Array<Joke>>;

  constructor( private httpClient: HttpClient ) {

    this.getJokesFromJSON();

  }

  /**
   * 
   * @param from the mail adress of the author.
   * @param joke a Joke object.
   */
  sendJokeByMail( from: string, joke: Joke): void {

    const result = this.httpClient.post(SEND_JOKE_BY_MAIL_URL, { from, joke }).pipe(
      catchError( this.handleError )
    ).toPromise();

    result.then( val => { console.log('Mail send result:', val); });

  }

  getJokes(): Promise<Array<Joke>> {

    return this.jokes;

  }

  private getJokesFromJSON(): void {
    this.jokes = this.httpClient.get<Array<Joke>>(JOKE_JSON_FILE_URL).pipe(
      retry(3),
      catchError( this.handleError )
    ).toPromise();
  }

  private handleError(error: HttpErrorResponse) {

    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}

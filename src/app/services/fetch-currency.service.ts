import {Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Dictionary, Response} from '../models/response.model';

@Injectable({
  providedIn: 'root',
})
export class FetchCurrencyService {
  private url = '';

  constructor(private http: HttpClient) {
    this.url = `${environment.apiUrl}${environment.apiKey}${environment.apiEndpoint}`;
  }

  public getExchangeRates(): Observable<Dictionary<number>> {
    return this.http.get<Response>(this.url).pipe(
      map((response) => response.conversion_rates),
    );
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Movie} from '../models/movie.model';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FetchApiService {

 baseURL = environment.baseApiURL;
  apiKey = environment.apiKey;

  constructor(private http: HttpClient) {}

  fetUpcoming(): Observable <{}> {
      return this.http.get<{}>(`${this.baseURL}upcoming?api_key=${this.apiKey}`);
    }
}

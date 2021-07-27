import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { State } from '../types/states';

@Injectable({
  providedIn: 'root',
})
export class StatesService {
  readonly baseUrl = 'http://localhost:4200/assets/data/states.json';

  constructor(private http: HttpClient) {}

  getStates(): Observable<State[]> {
    return this.http.get<State[]>(this.baseUrl);
  }
}

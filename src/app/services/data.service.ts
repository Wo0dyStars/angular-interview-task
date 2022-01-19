import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  get<T>(url: string): Observable<T> {
      return this.http.get<T>(`${environment.apiEndpoint}${url}`);
  }
}
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class SpeakersService {

  constructor(private http: DataService) { }

  public getSpeakers(): Observable<any> {
    return this.http.get("?results=20&page=1");
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Speaker } from '../models/speaker';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class SpeakersService {

  constructor(private http: DataService) { }

  public getSpeakers(): Observable<any> {
    return this.http.get("?results=20&page=1");
  }

  public getSpeakersWithMergedName(speakers: Speaker[]): Speaker[] {
    return speakers.map((speaker: Speaker) => (
      { ...speaker, mergedName: speaker.name.title + " " + speaker.name.first + " " + speaker.name.last }
    ));
  }

  private contains(element: any, searchText: any, regex: any): boolean {
    if ( typeof element === 'string' ) {
      if ( regex.test(element.toLowerCase()) ) {
        return true;
      }
    }

    if ( typeof element === 'number' ) {
      if ( element == searchText ) {
        return true;
      }
    }

    return false;
  }

  public filterSpeakers(input: string, speakers: Speaker[]): Speaker[] {
    const trimmedInput = input.trim();
    const regex = (new RegExp(trimmedInput));

    if ( trimmedInput !== "" ) {
      return speakers.filter((speaker: Speaker) => {
        for ( let element in speaker ) {
          if ( this.contains(speaker[element], trimmedInput, regex) ) {
            return true;
          }
          
          if ( typeof speaker[element] === 'object' ) {
            const speakerObject = speaker[element];

            for ( let subelement in speakerObject ) {
              if ( this.contains(speakerObject[subelement], trimmedInput, regex) ) {
                return true;
              }
            }
          }
        }
      })
    }

    return speakers;
  }
}

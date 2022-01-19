import { Component, OnInit } from '@angular/core';
import { Speaker, SpeakerData } from 'src/app/models/speaker';
import { SpeakersService } from 'src/app/services/speakers.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public speakers: Speaker[] = [];
  public allSpeakers: Speaker[] = [];
  public searchValue: any = "";
  
  constructor(private speakersService: SpeakersService) { }

  ngOnInit(): void {
    this.loadSpeakers();
  }

  private loadSpeakers(): void {
    this.speakersService.getSpeakers().subscribe((speakerData: SpeakerData) => {
      this.speakers = this.speakersService.getSpeakersWithMergedName(speakerData.results);
      this.allSpeakers = this.speakers;
      console.log(this.speakers)
    })
  }

  public filterSpeakers(): void {
    this.speakers = this.speakersService.filterSpeakers(this.searchValue, this.allSpeakers);
  }

  public resetSearch(): void {
    this.searchValue = "";
    this.filterSpeakers();
  }
}
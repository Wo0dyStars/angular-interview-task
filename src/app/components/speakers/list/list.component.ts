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

  constructor(private speakersService: SpeakersService) { }

  ngOnInit(): void {
    this.loadSpeakers();
  }

  private loadSpeakers(): void {
    this.speakersService.getSpeakers().subscribe((speakerData: SpeakerData) => {
      this.speakers = speakerData.results;
    })
  }

}

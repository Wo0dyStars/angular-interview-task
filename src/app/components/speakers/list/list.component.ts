import { Component, OnInit } from '@angular/core';
import { Speaker, SpeakerData } from 'src/app/models/speaker';
import { DialogService } from 'src/app/services/dialog.service';
import { SpeakersService } from 'src/app/services/speakers.service';
import { SpeakerComponent } from 'src/app/shared/dialog/speaker/speaker.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public speakers: Speaker[] = [];
  public allSpeakers: Speaker[] = [];
  public searchValue: any = "";
  
  constructor(private speakersService: SpeakersService, private dialogService: DialogService) { }

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

  public viewSpeaker(speaker: Speaker): void {
    this.dialogService.panel(SpeakerComponent, speaker, speaker.mergedName);
  }
}
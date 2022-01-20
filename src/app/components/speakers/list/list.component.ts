import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { initialPage, pageSizeOptions } from 'src/app/models/page';
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
  public page: PageEvent = initialPage;
  public pageSizeOptions = pageSizeOptions;
  public showFirstLastButtons = true;
  
  constructor(private speakersService: SpeakersService, private dialogService: DialogService) { }

  ngOnInit(): void {
    this.loadSpeakers();
  }

  private loadSpeakers(): void {
    this.speakersService.getSpeakers(this.page.length, this.page.pageIndex).subscribe((speakerData: SpeakerData) => {
      this.speakers = this.speakersService.getSpeakersWithMergedName(speakerData.results);
      this.allSpeakers = this.speakers;
      console.log(this.speakers)
    })
  }

  public showSpeakers(): void {
    const startIndex = this.page.pageIndex * this.page.pageSize;
    const endIndex = startIndex + this.page.pageSize;

    this.speakers = this.allSpeakers.slice(startIndex, endIndex);
  }

  public filterSpeakers(): void {
    this.speakers = this.speakersService.filterSpeakers(this.searchValue, this.allSpeakers);
  }

  public resetSearch(): void {
    this.searchValue = "";
    this.filterSpeakers();
    this.showSpeakers();
  }

  public viewSpeaker(speaker: Speaker): void {
    this.dialogService.panel(SpeakerComponent, speaker, speaker.mergedName);
  }

  public handlePageEvent(event: PageEvent) {
    this.page = event;
    this.resetSearch();
  }
}
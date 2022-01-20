import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { initialPage, pageSizeOptions, ViewTypes, viewTypes } from 'src/app/models/page';
import { Speaker, SpeakerData } from 'src/app/models/speaker';
import { DialogService } from 'src/app/services/dialog.service';
import { PageService } from 'src/app/services/page.service';
import { SpeakersService } from 'src/app/services/speakers.service';
import { SpeakerComponent } from 'src/app/shared/dialog/speaker/speaker.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public viewTypes = viewTypes;
  public speakers: Speaker[] = [];
  public allSpeakers: Speaker[] = [];
  public searchValue: any = "";
  public page: PageEvent = initialPage;
  public pageSizeOptions = pageSizeOptions;
  public showFirstLastButtons = true;
  public view: ViewTypes = viewTypes.TABLE;
  public displayedColumns: string[] = ['avatar', 'mergedName', 'email', 'city', 'country', 'action'];
  
  private initialLoad: boolean = false;
  private $page: Subscription;
  
  constructor(private speakersService: SpeakersService, 
              private dialogService: DialogService,
              private pageService: PageService ) { }

  ngOnInit(): void {
    this.$page = this.pageService.getPage().subscribe((page: PageEvent) => {
      this.page = page;

      if ( !this.initialLoad ) {
        this.loadSpeakers();
        this.initialLoad = true;
      }
    });
  }

  private loadSpeakers(): void {
    this.speakersService.getSpeakers(this.page.length, this.page.pageIndex).subscribe((speakerData: SpeakerData) => {
      this.speakers = this.speakersService.getSpeakersWithMergedName(speakerData.results);
      this.allSpeakers = this.speakers;
      this.handlePageEvent(this.page);
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
    this.pageService.setPage(event);
    this.resetSearch();
  }

  ngOnDestroy(): void {
    if ( this.$page ) this.$page.unsubscribe();
  }
}

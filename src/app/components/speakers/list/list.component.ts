import { Component, OnInit } from '@angular/core';
import { SpeakersService } from 'src/app/services/speakers.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public speakers: any;

  constructor(private speakersService: SpeakersService) { }

  ngOnInit(): void {
    this.loadSpeakers();
  }

  private loadSpeakers(): void {
    this.speakersService.getSpeakers().subscribe((speakers) => {
      this.speakers = speakers;
      console.log(this.speakers)
    })
  }

}

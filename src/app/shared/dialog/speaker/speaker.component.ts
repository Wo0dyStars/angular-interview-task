import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Speaker } from 'src/app/models/speaker';

@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.scss']
})
export class SpeakerComponent implements OnInit {
  public speaker: Speaker;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<SpeakerComponent>) { }

  ngOnInit(): void {
    this.speaker = this.data.data;
  }

  public onDismiss(): void {
    this.dialogRef.close(false);
  }
}

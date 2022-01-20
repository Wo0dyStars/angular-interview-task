import { Component, Input, OnInit } from '@angular/core';
import { Speaker } from 'src/app/models/speaker';

@Component({
  selector: 'app-speaker-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() speaker: Speaker;

  constructor() { }

  ngOnInit(): void {}

}

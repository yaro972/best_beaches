import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Beach} from '../models/beach';

@Component({
  selector: 'app-destination-detail',
  templateUrl: './destination-detail.component.html',
  styleUrls: ['./destination-detail.component.scss']
})
export class DestinationDetailComponent implements OnInit {
  @Input() destination: Beach;
  @Output() close: EventEmitter<any> = new EventEmitter<any>();
  @Output() reserveDest: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  onGoBack() {
    this.close.emit();
  }

  onChoose() {
    console.log(this.destination);
    this.close.emit(this.destination);
  }
}

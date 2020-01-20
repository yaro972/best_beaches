import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Beach} from '../../models/beach';

@Component({
  selector: 'app-destination-grid',
  templateUrl: './destination-grid.component.html',
  styleUrls: ['./destination-grid.component.scss']
})
export class DestinationGridComponent implements OnInit {
  @Input() dataSource: Beach[];
  @Output() selectedDestinationEvent: EventEmitter<Beach> = new EventEmitter<Beach>();

  displayedColumns: string[] = ['img', 'beachNames', 'pays'];

  constructor() {
  }

  ngOnInit() {
  }

  onCLick(beach: Beach) {
    this.selectedDestinationEvent.emit(beach);
  }
}

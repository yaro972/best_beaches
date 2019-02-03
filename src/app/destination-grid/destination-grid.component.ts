import {Component, Input, OnInit, Output} from '@angular/core';
import {Beach} from '../models/beach';

@Component({
  selector: 'app-destination-grid',
  templateUrl: './destination-grid.component.html',
  styleUrls: ['./destination-grid.component.scss']
})
export class DestinationGridComponent implements OnInit {
  @Input() dataSource: Beach[];
  @Output() selectedElem: Beach;
  displayedColumns: string[] = ['img', 'beachNames', 'pays'];

  constructor() {
  }

  ngOnInit() {
  }

  onCLick(beach: Beach) {
    // ev.preventDefault;
    this.selectedElem = beach;

  }
}

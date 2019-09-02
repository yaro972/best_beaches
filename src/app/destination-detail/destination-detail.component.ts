import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Beach} from '../models/beach';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-destination-detail',
  templateUrl: './destination-detail.component.html',
  styleUrls: ['./destination-detail.component.scss']
})
export class DestinationDetailComponent implements OnInit {
  @Input() destination: Beach;
  @Output() close: EventEmitter<any> = new EventEmitter<any>();
  @Output() reserveDest: EventEmitter<any> = new EventEmitter<any>();
  private destinationRoute$;
  private id: number;


  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    // this.destinationRoute$ = this.route.paramMap.pipe(
    // switchMap((params: ParamMap) =>
    // this.service.getHero(params.get('id')) )

    this.destinationRoute$ = this.route.paramMap.subscribe((el) => {
        // this.id = el.params.id;
        console.log(el);
      }
    );
    // console.log(this.route);

  }

  onGoBack() {
    this.close.emit();
  }

  onChoose() {
    console.log(this.destination);
    this.close.emit(this.destination);
  }
}

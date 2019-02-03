import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {GetBeachesModule} from '../modules/get-beaches.module';
import {Beach} from '../models/beach';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss'],
  providers: [GetBeachesModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DestinationComponent implements OnInit, OnDestroy, AfterViewInit {

  beachesList: Beach[] = [];
  private destinationModuleRef: Subscription = null;


  constructor(private destinationMo: GetBeachesModule, private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.destinationModuleRef.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.extracted();

  }

  private extracted() {
    this.destinationModuleRef = this.destinationMo
      .getBeaches()
      .subscribe((data) => {
        this.beachesList = data;
        this.cdr.detectChanges();
      });
  }

}

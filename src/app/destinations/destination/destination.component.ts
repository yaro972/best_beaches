import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Beach} from '../../models/beach';
import {Subscription} from 'rxjs';
import {BeachesService} from '../../core/services/beaches.service/beaches.service';


@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DestinationComponent implements OnInit, OnDestroy, AfterViewInit {

  beachesList: Beach[] = [];
  private destinationModuleRef: Subscription = null;
  public destination_selected: Beach = null;


  constructor(private beachService: BeachesService, private cdr: ChangeDetectorRef) {
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
    this.destinationModuleRef = this.beachService.getBeaches()
      .subscribe((data) => {
        this.beachesList = data;
        this.cdr.detectChanges();
      });
  }

  onSelected_Destination(ev: any) {
    console.log(ev);
    this.destination_selected = ev;
  }

  onClose() {
    this.destination_selected = null;
  }

  onReserveDest() {

  }
}

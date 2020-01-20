import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatCardModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {DestinationComponent} from './destination/destination.component';
import {DestinationDetailComponent} from './destination-detail/destination-detail.component';
import {DestinationGridComponent} from './destination-grid/destination-grid.component';

@NgModule({
  declarations: [
    DestinationComponent,
    DestinationDetailComponent,
    DestinationGridComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule
  ],
  exports: [
    DestinationComponent
  ]
})
export class DestinationsModule {
}

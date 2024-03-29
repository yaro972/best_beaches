import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainNavComponent} from './main-nav/main-nav.component';
import {LayoutModule} from '@angular/cdk/layout';

import {RouterModule} from '@angular/router';
import {AccueilComponent} from './accueil/accueil.component';
import {MainRoutesModule} from './routes/main-routes.module';
import {AboutComponent} from './about/about.component';
import {DestinationComponent} from './destination/destination.component';
import {HttpClientModule} from '@angular/common/http';
import {DestinationGridComponent} from './destination-grid/destination-grid.component';
import {DestinationDetailComponent} from './destination-detail/destination-detail.component';
import {ReservationsComponent} from './reservations/reservations.component';
import {ReserveDestinationComponent} from './reserve-destination/reserve-destination.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    AccueilComponent,
    AboutComponent,
    DestinationComponent,
    DestinationGridComponent,
    DestinationDetailComponent,
    ReservationsComponent,
    ReserveDestinationComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    RouterModule,
    MainRoutesModule,
    MatTableModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

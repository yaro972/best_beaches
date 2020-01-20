import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainNavComponent} from './main-nav/main-nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatButtonModule, MatCardModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {AccueilComponent} from './accueil/accueil.component';
import {MainRoutesModule} from './routes/main-routes.module';
import {AboutComponent} from './about/about.component';
import {MatTableModule} from '@angular/material/table';
import {HttpClientModule} from '@angular/common/http';
import {ReservationsComponent} from './reservations/reservation/reservations.component';
import {ReserveDestinationComponent} from './reservations/reserve-destination/reserve-destination.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './core/services/memory.service/in-memory-data.service';
import {DestinationsModule} from './destinations/destinations/destinations.module';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    AccueilComponent,
    AboutComponent,
    ReservationsComponent,
    ReserveDestinationComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    MainRoutesModule,
    MatTableModule,
    HttpClientModule,
    MatCardModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.

    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    ),
    DestinationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

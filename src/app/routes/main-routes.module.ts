import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccueilComponent} from '../accueil/accueil.component';
import {AboutComponent} from '../about/about.component';
import {DestinationComponent} from '../destinations/destination/destination.component';
import {ReservationsComponent} from '../reservations/reservation/reservations.component';
import {ReserveDestinationComponent} from '../reservations/reserve-destination/reserve-destination.component';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';
import {DestinationDetailComponent} from '../destinations/destination-detail/destination-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/accueil', pathMatch: 'full'},
  {path: 'accueil', component: AccueilComponent},
  {path: 'destination', component: DestinationComponent},
  {path: 'beach-information/:id', component: DestinationDetailComponent},
  {path: 'reserve/:id', component: ReserveDestinationComponent},
  {path: 'reservation', component: ReservationsComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class MainRoutesModule {


}

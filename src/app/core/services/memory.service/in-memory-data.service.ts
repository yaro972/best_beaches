import {Injectable} from '@angular/core';
import {Beach} from '../../../models/beach';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() {
  }

  createDb() {
    const beaches: Beach[] = [
      {
        'id': 1,
        'beachNames': 'Anse source d\'argent',
        'pays': 'Seychelles',
        'langues': [
          'Français',
          'Anglais',
          'Créole'
        ],
        'currency': 'La Roupie Seychelloise',
        'urlMap': 'assets/img/mapBeach/ansesourcedargent.png',
        'urlImg': '/assets/img/beaches/Anse_Source_Argent.jpg',
        'urlPartir': 'https://www.routard.com/billet_avion/seychelles.htm'
      },
      {
        'id': 2,
        'beachNames': 'Pensacola Beach',
        'pays': 'Floride, USA',
        'langues': [
          'Espagnol',
          'Anglais'
        ],
        'currency': 'Le Dollar',
        'urlMap': '/assets/img/mapBeach/pensacola.png',
        'urlImg': '/assets/img/beaches/PensacolaBeachFlorida.JPG',
        'urlPartir': 'https://www.routard.com/billet_avion/floride.htm'
      },
      {
        'id': 3,
        'beachNames': 'Zlatni Rat',
        'pays': 'Croatie',
        'langues': [
          'Croate'
        ],
        'currency': 'Le Kuna',
        'urlMap': '/assets/img/mapBeach/zlatniMap.png',
        'urlImg': '/assets/img/beaches/zlatniImg.png',
        'urlPartir': 'https://www.routard.com/guide/croatie/1619/avant_le_depart.htm'
      },
      {
        'id': 4,
        'beachNames': 'Nosy Iranja',
        'pays': 'Madagascar',
        'langues': [
          'Malgache'
        ],
        'currency': 'Ariary, Iraimbilanja',
        'urlMap': '/assets/img/mapBeach/Nosy_Iranja.png',
        'urlImg': '/assets/img/beaches/Nosy_Iranja.jpg',
        'urlPartir': 'https://www.routard.com/billet_avion/seychelles.htm'
      }
    ];

    return {beaches};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(beaches: Beach[]): number {
    return beaches.length > 0 ? Math.max(...beaches.map(beach => beach.id)) + 1 : 11;
  }
}

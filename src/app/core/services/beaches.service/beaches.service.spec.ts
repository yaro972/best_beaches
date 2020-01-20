import {TestBed} from '@angular/core/testing';

import {BeachesService} from './beaches.service';
import {BEACHES} from '../../../beach.mock';
import {Beach} from '../../../models/beach';

describe('BeachesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BeachesService = TestBed.get(BeachesService);
    expect(service).toBeTruthy();
  });
});

describe('Get all beaches', () => {
  const service: BeachesService = TestBed.get(BeachesService);
  let beaches: Beach[];
  beforeEach((done) => {
    service.getBeaches()
      .subscribe((beachList) => {
        beaches = beachList;
        console.log(beaches);
        // done();
      });
  });

  it('Should retreive an array', () => {
    expect(beaches).toEqual(jasmine.any(Array));
  });

  it('Should retreive have 4 elements', () => {
    expect(beaches.length).toEqual(4);
  });


  it('First element should get the first of mockup', () => {
    expect(beaches[0]).toEqual(BEACHES[0]);
  });
});

describe('Get one beach', () => {
  let service: BeachesService;
  beforeEach(() => {
    service = TestBed.get(BeachesService);
  });

  xit('Should retreive an array', () => {
    // expect(service.getBeach()).toEqual(jasmine.any(Array));
  });

  xit('should retreive one beach', () => {

  });
});

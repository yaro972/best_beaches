import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {ReserveDestinationComponent} from './reserve-destination.component';

describe('ReserveDestinationComponent', () => {
  let component: ReserveDestinationComponent;
  let fixture: ComponentFixture<ReserveDestinationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ReserveDestinationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

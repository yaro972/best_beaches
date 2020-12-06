import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {DestinationGridComponent} from './destination-grid.component';

describe('DestinationGridComponent', () => {
  let component: DestinationGridComponent;
  let fixture: ComponentFixture<DestinationGridComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DestinationGridComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

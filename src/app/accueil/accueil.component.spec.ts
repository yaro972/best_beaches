import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AccueilComponent} from './accueil.component';

describe('AccueilComponent', () => {
  let component: AccueilComponent;
  let fixture: ComponentFixture<AccueilComponent>;
  let h2: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccueilComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
    h2 = fixture.nativeElement.querySelector('h2');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display main title', () => {
    const fixtureComponent = TestBed.createComponent(AccueilComponent);
    fixtureComponent.detectChanges();
    const compiled = fixtureComponent.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Dream on');
    // expect(h2.textContent).toContain('Dream on');
  });
});

import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AboutComponent} from './about.component';
import {DebugElement} from '@angular/core';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // expect(component).toBeTruthy();
    expect(component).toBeDefined();
  });

  it('should have a container content', () => {
    const containerDe: DebugElement = fixture.debugElement;
    const containerEl: HTMLElement = containerDe.nativeElement;

    const p = containerEl.querySelector('.container');

    expect(p.textContent).toContain('Lorem ipsum dolor sit amet');
  });

  it('should have a title', () => {
    const containerDe: DebugElement = fixture.debugElement;
    const containerEl: HTMLElement = containerDe.nativeElement;

    const h2El = containerEl.querySelector('h2');
    expect(h2El.textContent).toEqual('about works!');
  });
});

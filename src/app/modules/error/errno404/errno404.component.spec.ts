import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Errno404Component } from './errno404.component';

describe('Errno404Component', () => {
  let component: Errno404Component;
  let fixture: ComponentFixture<Errno404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Errno404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Errno404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

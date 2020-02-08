import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockerTroublesComponent } from './locker-troubles.component';

describe('LockerTroublesComponent', () => {
  let component: LockerTroublesComponent;
  let fixture: ComponentFixture<LockerTroublesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockerTroublesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockerTroublesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

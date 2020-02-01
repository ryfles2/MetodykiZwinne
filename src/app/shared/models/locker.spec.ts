import { Locker } from '../models/locker';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('Locker', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        Locker
      ],
    }).compileComponents();
  }));

it('should create an instance', () => {
  expect(new Locker(55, 1)).toBeTruthy();
});
});
import { Statistic } from './statistic';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('Statistic', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        Statistic
      ],
    }).compileComponents();
  }));

it('should create an instance', () => {
  expect(new Statistic(2, 2, 5)).toBeTruthy();
});
});
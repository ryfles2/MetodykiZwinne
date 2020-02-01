import { User } from './user';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('User', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        User
      ],
    }).compileComponents();
  }));

it('should create an instance', () => {
  expect(new User()).toBeTruthy();
});
});
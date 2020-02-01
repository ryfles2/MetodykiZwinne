import { SpsUser } from './sps-user';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('SpsUser', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        SpsUser
      ],
    }).compileComponents();
  }));

it('should create an instance', () => {
  expect(new SpsUser(1, 'testlogin', 2)).toBeTruthy();
});
});

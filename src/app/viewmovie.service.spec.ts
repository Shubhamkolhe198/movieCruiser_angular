import { TestBed } from '@angular/core/testing';

import { ViewmovieService } from './viewmovie.service';

describe('ViewmovieService', () => {
  let service: ViewmovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewmovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

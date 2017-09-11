import { TestBed, inject } from '@angular/core/testing';

import { SetterService } from './setter.service';

describe('SetterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SetterService]
    });
  });

  it('should be created', inject([SetterService], (service: SetterService) => {
    expect(service).toBeTruthy();
  }));
});

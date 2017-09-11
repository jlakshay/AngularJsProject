import { TestBed, inject } from '@angular/core/testing';

import { UpdationServiceService } from './updation-service.service';

describe('UpdationServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdationServiceService]
    });
  });

  it('should be created', inject([UpdationServiceService], (service: UpdationServiceService) => {
    expect(service).toBeTruthy();
  }));
});

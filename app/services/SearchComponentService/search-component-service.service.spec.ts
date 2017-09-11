import { TestBed, inject } from '@angular/core/testing';

import { SearchComponentServiceService } from './search-component-service.service';

describe('SearchComponentServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchComponentServiceService]
    });
  });

  it('should be created', inject([SearchComponentServiceService], (service: SearchComponentServiceService) => {
    expect(service).toBeTruthy();
  }));
});


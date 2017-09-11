import { TestBed, inject } from '@angular/core/testing';

import { SearchListComponentService } from './search-list-component.service';

describe('SearchListComponentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchListComponentService]
    });
  });

  it('should be created', inject([SearchListComponentService], (service: SearchListComponentService) => {
    expect(service).toBeTruthy();
  }));
});

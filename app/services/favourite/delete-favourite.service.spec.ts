import { TestBed, inject } from '@angular/core/testing';

import { DeleteFavouriteService } from './delete-favourite.service';

describe('DeleteFavouriteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeleteFavouriteService]
    });
  });
  it('should be created', inject([DeleteFavouriteService], (service: DeleteFavouriteService) => {
    expect(service).toBeTruthy();
  }));
});

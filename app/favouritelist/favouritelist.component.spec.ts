import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouritelistComponent } from './favouritelist.component';

describe('FavouritelistComponent', () => {
  let component: FavouritelistComponent;
  let fixture: ComponentFixture<FavouritelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouritelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouritelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

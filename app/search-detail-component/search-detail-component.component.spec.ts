import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDetailComponentComponent } from './search-detail-component.component';

describe('SearchDetailComponentComponent', () => {
  let component: SearchDetailComponentComponent;
  let fixture: ComponentFixture<SearchDetailComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchDetailComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

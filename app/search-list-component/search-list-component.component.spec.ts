import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchListComponentComponent } from './search-list-component.component';

describe('SearchListComponentComponent', () => {
  let component: SearchListComponentComponent;
  let fixture: ComponentFixture<SearchListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

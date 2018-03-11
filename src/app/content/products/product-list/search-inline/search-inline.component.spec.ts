import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInlineComponent } from './search-inline.component';

describe('SearchInlineComponent', () => {
  let component: SearchInlineComponent;
  let fixture: ComponentFixture<SearchInlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchInlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

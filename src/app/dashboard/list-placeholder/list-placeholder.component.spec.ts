import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlaceholderComponent } from './list-placeholder.component';

describe('ListPlaceholderComponent', () => {
  let component: ListPlaceholderComponent;
  let fixture: ComponentFixture<ListPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListPlaceholderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

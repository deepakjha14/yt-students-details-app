import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsMarksComponent } from './students-marks.component';

describe('StudentsMarksComponent', () => {
  let component: StudentsMarksComponent;
  let fixture: ComponentFixture<StudentsMarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentsMarksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentsMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

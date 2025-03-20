import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamreviewComponent } from './examreview.component';

describe('ExamreviewComponent', () => {
  let component: ExamreviewComponent;
  let fixture: ComponentFixture<ExamreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExamreviewComponent]
    });
    fixture = TestBed.createComponent(ExamreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExaminerComponent } from './examiner.component';

describe('ExaminerComponent', () => {
  let component: ExaminerComponent;
  let fixture: ComponentFixture<ExaminerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExaminerComponent]
    });
    fixture = TestBed.createComponent(ExaminerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

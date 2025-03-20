import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamcreateComponent } from './examcreate.component';

describe('ExamcreateComponent', () => {
  let component: ExamcreateComponent;
  let fixture: ComponentFixture<ExamcreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExamcreateComponent]
    });
    fixture = TestBed.createComponent(ExamcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

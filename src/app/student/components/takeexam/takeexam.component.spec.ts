import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeexamComponent } from './takeexam.component';

describe('TakeexamComponent', () => {
  let component: TakeexamComponent;
  let fixture: ComponentFixture<TakeexamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TakeexamComponent]
    });
    fixture = TestBed.createComponent(TakeexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

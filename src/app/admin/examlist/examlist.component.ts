import { Component, OnInit } from '@angular/core';
import { ExamService } from '../services/exam.service';

@Component({
  selector: 'app-examlist',
  templateUrl: './examlist.component.html',
  styleUrls: ['./examlist.component.css'],
})
export class ExamlistComponent implements OnInit {
  exams: any[] = [];
  constructor(private examService: ExamService) {}

  ngOnInit(): void {
    this.examService.getExams().subscribe((data) => {
      this.exams = data;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Exam } from 'src/app/models/exam';
import { Question } from 'src/app/models/question';
import { ExamService } from 'src/app/services/exam.service';

@Component({
  selector: 'app-examiner',
  templateUrl: './examiner.component.html',
  styleUrls: ['./examiner.component.css'],
})
export class ExaminerComponent implements OnInit {
  exams: Exam[] = [];
  newExamTitle: string = '';
  userId!: string;

  constructor(private examService: ExamService) {}
  ngOnInit(): void {
    this.userId = JSON.parse(localStorage.getItem('user') || '{}').localId;
    this.examService.getExams().subscribe((exams) => {
      this.exams = Object.keys(exams).map((key) => ({
        id: key,
        ...exams[key],
      }));
    });
  }
  createExam() {
    if (!this.newExamTitle.trim()) {
      alert('Enter exam title');
      return;
    }
    const newExam: Exam = {
      title: this.newExamTitle,
      questions: [],
      createdBy: this.userId,
    };
    this.examService.createExams(newExam).subscribe(() => {
      alert('Exam Created');
      this.newExamTitle = '';
      this.ngOnInit();
    });
  }
}

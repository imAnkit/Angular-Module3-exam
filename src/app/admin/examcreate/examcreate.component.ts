import { Component } from '@angular/core';
import { ExamService } from '../services/exam.service';

@Component({
  selector: 'app-examcreate',
  templateUrl: './examcreate.component.html',
  styleUrls: ['./examcreate.component.css'],
})
export class ExamcreateComponent {
  title: string = '';
  questions: { question: string; options: string[]; correctAnswer: string }[] =
    [];
  constructor(private examService: ExamService) {}
  addQuestion() {
    this.questions.push({
      question: '',
      options: ['', '', '', ''],
      correctAnswer: '',
    });
  }

  createExam() {
    this.examService
      .createExam({
        title: this.title,
        questions: this.questions,
      })
      .subscribe(() => {
        alert('Exam Created');
      });
  }
}

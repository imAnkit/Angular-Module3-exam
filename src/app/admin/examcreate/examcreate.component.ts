import { Component } from '@angular/core';
import { ExamService } from '../services/exam.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-examcreate',
  templateUrl: './examcreate.component.html',
  styleUrls: ['./examcreate.component.css'],
})
export class ExamcreateComponent {
  examTitle: string = '';
  questions: any[] = [];

  newQuestion = {
    questionText: '',
    options: [] as string[],
    correctOption: '',
  };

  constructor(private examService: ExamService, private router: Router) {}

  addOption() {
    this.newQuestion.options.push('');
  }

  removeOption(index: number) {
    this.newQuestion.options.splice(index, 1);
  }

  addQuestion() {
    if (
      !this.newQuestion.questionText ||
      this.newQuestion.options.length < 2 ||
      !this.newQuestion.correctOption
    ) {
      alert('Please fill out all question fields correctly.');
      return;
    }

    if (!this.newQuestion.options.includes(this.newQuestion.correctOption)) {
      alert('Correct option must be one of the listed options.');
      return;
    }

    // Push the new question to the list
    this.questions.push({ ...this.newQuestion });

    // Reset the question form
    this.newQuestion = {
      questionText: '',
      options: [],
      correctOption: '',
    };
  }

  removeQuestion(index: number) {
    this.questions.splice(index, 1);
  }

  saveExam() {
    if (!this.examTitle) {
      alert('Exam title is required.');
      return;
    }

    if (this.questions.length === 0) {
      alert('You need to add at least one question.');
      return;
    }

    const examData = {
      title: this.examTitle,
      questions: this.questions,
    };

    this.examService.createExam(examData).subscribe({
      next: () => {
        alert('Exam created successfully!');
        this.router.navigate(['/admin']);
      },
      error: (error: Error) => {
        console.error(error);
        alert('Failed to create exam. Try again later.');
      },
    });
  }
}

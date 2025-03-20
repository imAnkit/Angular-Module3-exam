import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-takeexam',
  templateUrl: './takeexam.component.html',
  styleUrls: ['./takeexam.component.css'],
})
export class TakeExamComponent implements OnInit, OnDestroy {
  examId!: string;
  exam: any;
  currentQuestionIndex = 0;
  selectedOption: string = '';
  score = 0;

  timer = 10;
  timerSubscription!: Subscription;

  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private examService: StudentService
  ) {}

  ngOnInit(): void {
    this.examId = this.route.snapshot.paramMap.get('id') || '';
    this.getExamData();
  }

  getExamData() {
    this.examService.getExamById(this.examId).subscribe({
      next: (exam) => {
        if (exam) {
          this.exam = exam;
          this.startTimer();
        } else {
          alert('Exam not found!');
          this.router.navigate(['/student']);
        }
        this.isLoading = false;
      },
      error: () => {
        alert('Failed to load exam!');
        this.router.navigate(['/student']);
      },
    });
  }

  get currentQuestion() {
    return this.exam.questions[this.currentQuestionIndex];
  }

  startTimer() {
    this.timer = 10;

    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }

    this.timerSubscription = interval(1000).subscribe(() => {
      this.timer--;

      if (this.timer === 0) {
        this.nextQuestion();
      }
    });
  }

  selectOption(option: string) {
    this.selectedOption = option;
  }

  nextQuestion() {
    if (!this.selectedOption) return;

    // Check if selected option is correct
    if (this.selectedOption === this.currentQuestion.correctOption) {
      this.score++;
    }

    this.selectedOption = '';
    this.currentQuestionIndex++;

    if (this.currentQuestionIndex >= this.exam.questions.length) {
      this.submitExam();
    } else {
      this.startTimer();
    }
  }

  submitExam() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }

    const result = {
      examId: this.examId,
      examTitle: this.exam.title,
      score: this.score,
      total: this.exam.questions.length,
      date: new Date().toISOString(),
    };

    this.examService.saveResult(result).subscribe({
      next: () => {
        console.log('Result saved successfully!');
      },
      error: (error: Error) => {
        console.error('Failed to save result:', error);
      },
    });
  }

  ngOnDestroy(): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }
}

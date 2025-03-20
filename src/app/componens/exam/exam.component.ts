import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from 'src/app/models/question';
import { ExamService } from 'src/app/services/exam.service';
import { TimerService } from 'src/app/services/timer.service';
import { environment } from 'src/app/shared/constants/firebase';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css'],
})
export class ExamComponent implements OnInit {
  examId!: string;
  questions: Question[] = [];
  currentQuestionIndex = 0;
  selectedAnswers: { [key: number]: string } = {};
  timeLeft!: number;
  timerRunning = false;
  userId!: string;
  constructor(
    private route: ActivatedRoute,
    private examService: ExamService,
    private timerService: TimerService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.examId = this.route.snapshot.paramMap.get('id')!;
    this.userId = JSON.parse(localStorage.getItem('user') || '{}').localId;

    this.examService.getExam(this.examId).subscribe((exam) => {
      this.questions = exam.questions;
      this.timeLeft = this.questions.length * 60;
      this.timerService.startTimer(this.timeLeft, this.submitExam.bind(this));
      this.timerRunning = true;
    });
  }
  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    }
  }

  previousQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }

  submitExam() {
    const examSubmission = {
      userId: this.userId,
      examId: this.examId,
      answers: this.selectedAnswers,
      submittedAt: new Date().toISOString(),
    };
    this.http
      .post(`${environment.databaseUrl}/submissions.json`, examSubmission)
      .subscribe(() => {
        alert('Exam submitted');
        this.router.navigate(['/dashboard']);
      });
  }
}

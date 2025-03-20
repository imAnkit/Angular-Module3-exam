import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-takeexam',
  templateUrl: './takeexam.component.html',
  styleUrls: ['./takeexam.component.css'],
})
export class TakeexamComponent implements OnInit {
  examId: string = '';
  exam: any;
  currentQuestionIndex = 0;
  selectedAnswer: string = '';
  answers: any[] = [];
  timeLeft: number = 300;
  timer: any;
  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.examId = this.route.snapshot.paramMap.get('examId')!;
    this.studentService.getExam(this.examId).subscribe((data) => {
      this.exam = data;
      this.startTimer();
    });
  }
  startTimer() {
    this.timer = setInterval(() => {
      this.timeLeft--;
      if (this.timeLeft === 0) {
        this.submitExam();
      }
    }, 1000);
  }
  nextQuestion() {
    this.answers.push({
      question: this.exam.questions[this.currentQuestionIndex].question,
      answer: this.selectedAnswer,
    });
    this.selectedAnswer = '';
    this.currentQuestionIndex++;
  }
  submitExam() {
    clearInterval(this.timer);
    this.studentService.submitExam(this.examId, this.answers).subscribe(() => {
      this.router.navigate(['/student/results']);
    });
  }
}

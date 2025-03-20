import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExamService } from '../services/exam.service';

@Component({
  selector: 'app-examreview',
  templateUrl: './examreview.component.html',
  styleUrls: ['./examreview.component.css'],
})
export class ExamreviewComponent implements OnInit {
  examId: string = '';
  submissions: any[] = [];
  constructor(
    private route: ActivatedRoute,
    private examService: ExamService
  ) {}
  ngOnInit(): void {
    this.examId = this.route.snapshot.paramMap.get('examId')!;
    this.examService.getExamSubmissions(this.examId).subscribe((data) => {
      this.submissions = data;
    });
  }

  gradeSubmission(submissionId: string, score: number) {
    this.examService
      .gradeSubmission(this.examId, submissionId, score)
      .subscribe(() => {
        alert('Submission graded');
      });
  }
}

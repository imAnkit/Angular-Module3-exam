import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-resultview',
  templateUrl: './resultview.component.html',
  styleUrls: ['./resultview.component.css'],
})
export class ResultviewComponent implements OnInit {
  results: any[] = [];
  exams: any[] = [];
  examTitlesMap: { [key: string]: string } = {};

  constructor(private studentExamService: StudentService) {}

  ngOnInit(): void {
    this.loadExamsAndResults();
  }

  private loadExamsAndResults() {
    // Load all exams first
    this.studentExamService.getAvailableExams().subscribe({
      next: (exams) => {
        this.exams = exams;
        this.buildExamTitlesMap();

        // Once exams are loaded, fetch results
        this.studentExamService.getResults().subscribe({
          next: (results) => {
            this.results = results;
          },
          error: (err) => {
            console.error('Error fetching results:', err);
          },
        });
      },
      error: (err) => {
        console.error('Error fetching exams:', err);
      },
    });
  }

  private buildExamTitlesMap() {
    this.examTitlesMap = {};
    this.exams.forEach((exam) => {
      this.examTitlesMap[exam.id] = exam.title;
    });
  }
}

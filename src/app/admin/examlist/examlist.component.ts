import { Component, OnInit } from '@angular/core';
import { ExamService } from '../services/exam.service';

@Component({
  selector: 'app-examlist',
  templateUrl: './examlist.component.html',
  styleUrls: ['./examlist.component.css'],
})
export class ExamlistComponent implements OnInit {
  exams: any[] = [];
  isLoading = false;
  constructor(private examService: ExamService) {}

  ngOnInit(): void {
    this.loadExams();
  }
  loadExams() {
    this.isLoading = true;
    this.examService.getExams().subscribe({
      next: (exams) => {
        this.exams = exams;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching exams:', err);
        this.isLoading = false;
      },
    });
  }
  deleteExam(examId: string) {
    if (!confirm('Are you sure you want to delete this exam?')) {
      return;
    }

    this.examService.deleteExam(examId).subscribe({
      next: () => {
        alert('Exam deleted successfully!');
        this.loadExams();
      },
      error: (err) => {
        console.error('Error deleting exam:', err);
        alert('Failed to delete exam.');
      },
    });
  }
}

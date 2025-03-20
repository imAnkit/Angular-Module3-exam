import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { ProfileService } from 'src/app/authentication/services/profile.service';

@Component({
  selector: 'app-studentdashboard',
  templateUrl: './studentdashboard.component.html',
  styleUrls: ['./studentdashboard.component.css'],
})
export class StudentdashboardComponent implements OnInit {
  // exams: any[] = [];
  // constructor(private studentService: StudentService) {}
  // ngOnInit() {
  //   this.studentService.getAvailableExams().subscribe((data) => {
  //     this.exams = data;
  //   });
  // }
  exams: any[] = [];
  results: any[] = [];
  availableExams: any[] = [];
  constructor(
    private studentExamService: StudentService,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {
    this.loadExamsAndResults();
  }

  async loadExamsAndResults() {
    const user = this.profileService.getUser();

    if (!user) {
      console.error('No logged in user');
      return;
    }

    // Get all exams
    this.studentExamService.getAvailableExams().subscribe((examList) => {
      this.exams = examList || [];
      this.studentExamService.getResults().subscribe((resultList) => {
        this.results = resultList || [];
        this.filterAvailableExams();
      });
    });
  }

  filterAvailableExams() {
    const attemptedExamIds = this.results.map((r) => r.examId);
    this.availableExams = this.exams.filter(
      (exam) => !attemptedExamIds.includes(exam.id)
    );
  }
}

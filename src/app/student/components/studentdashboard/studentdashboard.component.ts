import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-studentdashboard',
  templateUrl: './studentdashboard.component.html',
  styleUrls: ['./studentdashboard.component.css'],
})
export class StudentdashboardComponent implements OnInit {
  exams: any[] = [];
  constructor(private studentService: StudentService) {}
  ngOnInit(): void {
    this.studentService.getAvailableExams().subscribe((data) => {
      this.exams = data;
    });
  }
}

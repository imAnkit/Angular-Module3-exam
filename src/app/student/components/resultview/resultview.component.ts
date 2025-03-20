import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-resultview',
  templateUrl: './resultview.component.html',
  styleUrls: ['./resultview.component.css'],
})
export class ResultviewComponent implements OnInit {
  results: any[] = [];
  constructor(private studentService: StudentService) {}
  ngOnInit(): void {
    this.studentService.getResults().subscribe((data) => {
      this.results = data;
    });
  }
}

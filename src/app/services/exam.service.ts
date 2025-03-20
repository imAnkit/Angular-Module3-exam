import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../shared/constants/firebase';
import { Exam } from '../models/exam';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExamService {
  constructor(private http: HttpClient) {}

  getExams(): Observable<{ [key: string]: Exam }> {
    return this.http.get<{ [key: string]: Exam }>(
      `${environment.databaseUrl}/exams.json`
    );
  }
  getExam(examId: String): Observable<Exam> {
    return this.http.get<Exam>(
      `${environment.databaseUrl}/exams/${examId}.json`
    );
  }

  createExams(examData: Exam) {
    return this.http.post(`${environment.databaseUrl}/exams.json`, examData);
  }
}

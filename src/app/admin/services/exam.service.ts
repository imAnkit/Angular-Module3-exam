import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  BASE_URL,
  FIREBASE_SIGN_IN_URL,
  FIREBASE_SIGN_UP_URL,
  USER_ENDPOINT,
} from 'src/app/shared/constants/firebase';
@Injectable({
  providedIn: 'root',
})
export class ExamService {
  private baseUrl = `${BASE_URL}/exams`;
  constructor(private http: HttpClient) {}

  getExams(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}.json`);
  }

  createExam(exam: any): Observable<any> {
    return this.http.post(`${this.baseUrl}.json`, exam);
  }
  getExamSubmissions(examId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/${examId}/submissions.json`);
  }
  gradeSubmission(
    examId: string,
    submissionId: string,
    score: number
  ): Observable<any> {
    return this.http.put(
      `${this.baseUrl}/${examId}/submissions/${submissionId}/score.json`,
      score
    );
  }
}

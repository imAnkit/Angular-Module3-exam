import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from 'src/app/shared/constants/firebase';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private baseUrl = `${BASE_URL}/exams`;
  constructor(private http: HttpClient) {}
  getAvailableExams(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}.json`);
  }
  getExam(examId: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${examId}.json`);
  }

  submitExam(examId: string, answers: any[]): Observable<any> {
    return this.http.post(`${this.baseUrl}/${examId}/submissions.json`, {
      answers,
    });
  }

  getResults(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/results.json`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
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

  // Create an exam
  createExam(examData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}.json`, examData);
  }

  // Get all exams
  getExams(): Observable<any[]> {
    return this.http.get(`${this.baseUrl}.json`).pipe(
      map((response: any) => {
        if (!response) return [];

        return Object.keys(response).map((key) => ({
          id: key,
          ...response[key],
        }));
      })
    );
  }

  // Get a single exam by ID
  getExamById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}.json`).pipe(
      map((exam: any) => ({
        id: id,
        ...exam,
      }))
    );
  }

  // Delete an exam
  deleteExam(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}.json`);
  }
}

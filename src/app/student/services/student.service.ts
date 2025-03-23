import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, throwError } from 'rxjs';
import { AuthService } from 'src/app/authentication/services/auth.service';
import { ManageService } from 'src/app/authentication/services/manage.service';
import { BASE_URL } from 'src/app/shared/constants/firebaseEnvironment';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private baseExamsUrl = `${BASE_URL}/exams`;
  private baseResultsUrl = `${BASE_URL}/results`;

  constructor(private http: HttpClient, private manageService: ManageService) {}

  getAvailableExams(): Observable<any[]> {
    return this.http.get(`${this.baseExamsUrl}.json`).pipe(
      map((response: any) => {
        if (!response) return [];

        return Object.keys(response).map((key) => ({
          id: key,
          ...response[key],
        }));
      })
    );
  }

  getExamById(examId: string): Observable<any> {
    return this.http.get(`${this.baseExamsUrl}/${examId}.json`).pipe(
      map((exam: any) => ({
        id: examId,
        ...exam,
      }))
    );
  }

  saveResult(result: any): Observable<any> {
    const userId = this.manageService.getUserId();

    if (!userId) {
      return throwError(() => new Error('User not found'));
    }

    return this.http.post(`${this.baseResultsUrl}/${userId}.json`, result);
  }

  getResults(): Observable<any[]> {
    const userId = this.manageService.getUserId();

    if (!userId) {
      return throwError(() => new Error('User not found'));
    }

    return this.http.get(`${this.baseResultsUrl}/${userId}.json`).pipe(
      map((response: any) => {
        if (!response) return [];

        return Object.keys(response).map((key) => ({
          id: key,
          ...response[key],
        }));
      })
    );
  }
}

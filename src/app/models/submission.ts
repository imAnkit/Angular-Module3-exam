export interface Submission {
  id?: string;
  examId: string;
  userId: string;
  answers: { [questionId: string]: string };
  submittedAt: string;
  evaluated?: boolean;
  score?: number;
  feedback?: string;
}

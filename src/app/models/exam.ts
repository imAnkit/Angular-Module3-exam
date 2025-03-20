import { Question } from './question';

export interface Exam {
  id?: string;
  title: string;
  createdBy: string;
  questions: Question[];
}

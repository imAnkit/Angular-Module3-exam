import { Question } from './question';

export interface Exam {
  id?: string;
  title: string;
  questions: Question[];
}

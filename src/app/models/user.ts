export interface User {
  id?: string;
  name: string;
  email?: string;
  phoneNumber?: string;
  role: 'admin' | 'examiner' | 'student';
}

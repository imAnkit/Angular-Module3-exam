import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student.component';
import { RouterModule, Routes } from '@angular/router';
import { StudentdashboardComponent } from './components/studentdashboard/studentdashboard.component';
import { TakeexamComponent } from './components/takeexam/takeexam.component';
import { ResultviewComponent } from './components/resultview/resultview.component';
import { FormsModule } from '@angular/forms';

const studentRoutes: Routes = [
  {
    path: '',
    component: StudentComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: StudentdashboardComponent },
      { path: 'take-exam/:examId', component: TakeexamComponent },
      { path: 'results', component: ResultviewComponent },
    ],
  },
];

@NgModule({
  declarations: [
    StudentComponent,
    StudentdashboardComponent,
    TakeexamComponent,
    ResultviewComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(studentRoutes), FormsModule],
})
export class StudentModule {}

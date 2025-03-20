import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student.component';
import { RouterModule, Routes } from '@angular/router';
import { StudentdashboardComponent } from './components/studentdashboard/studentdashboard.component';
import { ResultviewComponent } from './components/resultview/resultview.component';
import { FormsModule } from '@angular/forms';
import { TakeExamComponent } from './components/takeexam/takeexam.component';
import { NavbarStudentComponent } from './components/navbar-student/navbar-student.component';

const studentRoutes: Routes = [
  {
    path: '',
    component: StudentComponent,
    children: [
      { path: '', component: StudentdashboardComponent },
      { path: 'take-exam/:id', component: TakeExamComponent },
      { path: 'results', component: ResultviewComponent },
    ],
  },
];

@NgModule({
  declarations: [
    StudentComponent,
    StudentdashboardComponent,
    TakeExamComponent,
    ResultviewComponent,
    NavbarStudentComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(studentRoutes), FormsModule],
})
export class StudentModule {}

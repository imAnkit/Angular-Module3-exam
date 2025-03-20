import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamlistComponent } from './examlist/examlist.component';
import { ExamcreateComponent } from './examcreate/examcreate.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'exam-list', pathMatch: 'full' },
      { path: 'exam-list', component: ExamlistComponent },
      { path: 'create', component: ExamcreateComponent },
      // { path: 'review/:examId', component: ExamreviewComponent },
    ],
  },
];
@NgModule({
  declarations: [AdminComponent, ExamlistComponent, ExamcreateComponent, NavbarAdminComponent],
  imports: [CommonModule, RouterModule.forChild(adminRoutes), FormsModule],
})
export class AdminModule {}

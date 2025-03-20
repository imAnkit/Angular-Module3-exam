import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componens/login/login/login.component';
import { DashboardComponent } from './componens/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { ExamComponent } from './componens/exam/exam.component';
import { AdminComponent } from './componens/admin/admin.component';
import { ExaminerComponent } from './componens/examiner/examiner.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'examiner', component: ExaminerComponent, canActivate: [AuthGuard] },
  { path: 'exam/:id', component: ExamComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

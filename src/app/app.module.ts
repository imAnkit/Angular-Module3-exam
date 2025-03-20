import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './componens/login/login/login.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './componens/dashboard/dashboard.component';
import { ExamComponent } from './componens/exam/exam.component';
import { AdminComponent } from './componens/admin/admin.component';
import { ExaminerComponent } from './componens/examiner/examiner.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, DashboardComponent, ExamComponent, AdminComponent, ExaminerComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

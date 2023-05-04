import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatTableModule} from '@angular/material/table';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CalendarModule, DatePickerModule, DateRangePickerModule, DateTimePickerModule, TimePickerModule } from '@syncfusion/ej2-angular-calendars';



@NgModule({
  declarations: [
    DashboardComponent,
    StudentDashboardComponent,
    TeacherDashboardComponent,
    AdminDashboardComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    DashboardRoutingModule,
    FontAwesomeModule,
    NgApexchartsModule,
    CalendarModule,
    DatePickerModule,
     TimePickerModule, 
     DateRangePickerModule,
      DateTimePickerModule
  ]
})
export class DashboardModule { }

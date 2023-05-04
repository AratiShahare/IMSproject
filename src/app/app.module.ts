import { NgModule } from '@angular/core';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
 import { StudentsRoutingModule } from './students/students-routing.module';
import { StudentsModule } from './students/students.module';
  // import { StudentsComponent } from './students/students.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import{MatExpansionModule} from '@angular/material/expansion';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import{ MatButtonModule} from '@angular/material/button'
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatPaginatorModule} from '@angular/material/paginator';
import { DashboardModule } from './dashboard/dashboard.module';
import { TeacherModule } from './teacher/teacher.module';
import { DepartmentModule } from './department/department.module';
import { SubjectModule } from './subject/subject.module';
import { AccountModule } from './account/account.module';
import { AuthenticationModule } from './authentication/authentication.module';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {MatTableModule} from '@angular/material/table';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CalendarModule, DatePickerModule, DateRangePickerModule, DateTimePickerModule, TimePickerModule } from '@syncfusion/ej2-angular-calendars';



@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule,
     StudentsRoutingModule,
    BrowserAnimationsModule,
    StudentsModule,
    HttpClientModule,
    ReactiveFormsModule,
     FormsModule,
     DashboardModule,
     MatTableModule,
     TeacherModule,
     DepartmentModule,
     SubjectModule,
     AccountModule, 
     AuthenticationModule,
      MatSidenavModule,
      MatToolbarModule,
      MatMenuModule,
      MatIconModule,
      MatDividerModule,
      MatListModule,
      MatExpansionModule,
      // FontAwesomeModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatPaginatorModule,

      CalendarModule,
    DatePickerModule,
     TimePickerModule, 
     DateRangePickerModule,
      DateTimePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 


}

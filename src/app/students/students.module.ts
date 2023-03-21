import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentViewComponent } from './student-view/student-view.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StudentsComponent,
    StudentListComponent,
    StudentEditComponent,
    StudentAddComponent,
    StudentViewComponent,
    
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class StudentsModule { }

import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { StudentsComponent } from './students.component';

const routes: Routes = 
[
 {
  path: 'add',
   component: StudentAddComponent
 },
 {
  path:'edit',
  component:StudentEditComponent
 },
 {
  path:'list',
  component:StudentListComponent
 },

 {
  path:'view',
  component:StudentViewComponent
 }
 
] 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }

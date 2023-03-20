import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentAddComponent } from './department-add/department-add.component';
import { DepartmentEditComponent } from './department-edit/department-edit.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentComponent } from './department.component';

const routes: Routes = [
  { path: '', component: DepartmentComponent },
   {path:'dadd',component:DepartmentAddComponent},
   {path:'dedit',component:DepartmentEditComponent},
   {path:'dlist',component:DepartmentListComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }

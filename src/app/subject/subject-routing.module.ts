import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectAddComponent } from './subject-add/subject-add.component';
import { SubjectEditComponent } from './subject-edit/subject-edit.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { SubjectComponent } from './subject.component';

const routes: Routes = [
  { path: '', component: SubjectComponent },
  {path:'suadd', component:SubjectAddComponent},
   {path:'suedit', component:SubjectEditComponent},
   {path: 'sulist', component:SubjectListComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectRoutingModule { }

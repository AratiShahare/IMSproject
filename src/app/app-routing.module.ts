import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = 
[{
  path:"",
  redirectTo:"admin",
  pathMatch:"full"
},
  { path: 'students', 
loadChildren: () => import('./students/students.module').then(m => m.StudentsModule) },

{ path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },

{ path: 'teacher', loadChildren: () => import('./teacher/teacher.module').then(m => m.TeacherModule) },
{ path: 'department', loadChildren: () => import('./department/department.module').then(m => m.DepartmentModule) },
{ path: 'subject', loadChildren: () => import('./subject/subject.module').then(m => m.SubjectModule) },
{ path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
{ path: 'authentication', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

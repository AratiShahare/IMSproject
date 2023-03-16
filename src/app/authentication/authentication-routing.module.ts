import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: AuthenticationComponent },
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
   {path:'forgetpassword', component:ForgetpasswordComponent},
   {path:'errorpage', component:ErrorpageComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }

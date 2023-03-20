import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountComponent } from './account.component';
import { AddexpensesComponent } from './addexpenses/addexpenses.component';
import { AddfeesComponent } from './addfees/addfees.component';
import { AddsalaryComponent } from './addsalary/addsalary.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { FeescollectionComponent } from './feescollection/feescollection.component';
import { SalaryComponent } from './salary/salary.component';

const routes: Routes = [
  { path: '', component: AccountComponent },
  {path:'fees', component:FeescollectionComponent},
  {path:'expenses', component:ExpensesComponent},
  {path:'salary', component:SalaryComponent},
  {path:'addfees', component:AddfeesComponent},
  {path:'addexpenses', component:AddexpensesComponent},
  {path:'addsalary', component:AddsalaryComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }

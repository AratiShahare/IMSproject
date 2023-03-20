import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { FeescollectionComponent } from './feescollection/feescollection.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { SalaryComponent } from './salary/salary.component';
import { AddfeesComponent } from './addfees/addfees.component';
import { AddexpensesComponent } from './addexpenses/addexpenses.component';
import { AddsalaryComponent } from './addsalary/addsalary.component';


@NgModule({
  declarations: [
    AccountComponent,
    FeescollectionComponent,
    ExpensesComponent,
    SalaryComponent,
    AddfeesComponent,
    AddexpensesComponent,
    AddsalaryComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }

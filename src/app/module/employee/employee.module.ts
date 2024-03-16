import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';
import { EditempComponent } from './editemp/editemp.component';
import { AddempComponent } from './addemp/addemp.component';
import { EmpListComponent } from './emp-list/emp-list.component';


@NgModule({
  declarations: [
    EmployeeComponent,
    EditempComponent,
    AddempComponent,
    EmpListComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule
  ]
})
export class EmployeeModule { }

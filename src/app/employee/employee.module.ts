import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeComponent } from './employee.component';
import { routingEmpArr } from './employee.routing';


@NgModule({
declarations: [
  EmployeeComponent
],
imports: [
  CommonModule,
  routingEmpArr
]
})

export class EmployeeModule {}

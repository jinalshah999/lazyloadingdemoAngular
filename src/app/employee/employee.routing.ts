import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee.component';

const arr: Routes = [
  { path: '', component: EmployeeComponent }
];

export const routingEmpArr = RouterModule.forChild(arr);

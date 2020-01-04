import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const arr: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'product', loadChildren: './product/product.module#ProductModule' },
  { path: 'employee', loadChildren: './employee/employee.module#EmployeeModule'},
  { path: '**', component: HomeComponent }
];
export const routingArr = RouterModule.forRoot(arr);

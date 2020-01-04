import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  arr: Array<{ id: number, Name: string, Designation: string}> = [
    { id: 1, Name: 'Rick', Designation: 'CEO'},
    { id: 2, Name: 'Martin', Designation: 'Manager'},
    { id: 3, Name: 'Jones', Designation: 'Analyst'},
    { id: 4, Name: 'Ford', Designation: 'Clerk'},
    { id: 5, Name: 'Allen', Designation: 'Analyst'}
  ];

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-employeetable',
  templateUrl: './employeetable.component.html',
  styleUrls: ['./employeetable.component.css']
})
export class EmployeetableComponent implements OnInit {
  // public employees = [];
  employees : any ={};
  constructor(private employeeService: EmployeeService) { 
    this.getEmployeeData( );
  
  }

  ngOnInit() {
  }
  
  getEmployeeData(){
    // this.employees= this.employeeService.getEmployee()
    // this.employeeService.getEmployee().
    // subscribe(result => {this.employees = result;}
  }
}
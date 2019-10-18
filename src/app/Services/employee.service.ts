import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public url : string="../../assets/data/employees.json"
  
// public employees = [
//   { id: 1, name: 'omkar', salary: 15000 },
//   { id: 2, name: 'suraj', salary: 16000 },
//   { id: 3, name: 'somnath', salary: 17000 },
//   { id: 4, name: 'amol', salary: 18000 },
//   { id: 5, name: 'snehal', salary: 15000 },
// ];
  constructor(private httpClient :HttpClient ) { }

  // getEmployee(){
  //    return this.employees
  // }

  getEmployee(){
   return this.httpClient.get(this.url);
    
    }
    

  }


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeetable',
  templateUrl: './employeetable.component.html',
  styleUrls: ['./employeetable.component.css']
})
export class EmployeetableComponent implements OnInit {
  public employees = [
    { id: 1, name: 'omkar', salary: 15000 },
    { id: 2, name: 'suraj', salary: 16000 },
    { id: 3, name: 'somnath', salary: 17000 },
    { id: 4, name: 'amol', salary: 18000 },
    { id: 5, name: 'snehal', salary: 15000 },
  ];
  constructor() { }

  ngOnInit() {
  }

}

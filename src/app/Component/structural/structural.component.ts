import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css']
})
export class StructuralComponent implements OnInit {

  students: any;
  constructor() {
    this.students = [
      {rollno: 10, name: 'omkar', marks: 85},
      {rollno: 10, name: 'suraj', marks: 85},
      {rollno: 10, name: 'amol', marks: 85},
      {rollno: 10, name: 'ali', marks: 85},
      {rollno: 10, name: 'abhay', marks: 85}, ];
  }



ngOnInit() {
  }

}



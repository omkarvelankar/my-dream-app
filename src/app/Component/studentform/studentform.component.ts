import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentform',
  templateUrl: './studentform.component.html',
  styleUrls: ['./studentform.component.css']
})
export class StudentformComponent implements OnInit {

  public companyName = 'logipool infotech';
  constructor() { }

  getmyString() {
    return 'welcome to myhouse';
  }

  ngOnInit() {
  }

}

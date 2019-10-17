import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  public companyName = true;
  public company = false;
  public color = 'red';
  public colors = ['red', 'blue', 'green', 'yellow'];
  constructor() { }



  ngOnInit() {
  }

}

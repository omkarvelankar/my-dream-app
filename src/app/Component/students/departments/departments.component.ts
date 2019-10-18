import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  public selectedid;
departments =[
  {"id":1,"name":"Javascript"},
  {"id":2,"name":"Angular"},
  {"id":3,"name":"nodejs"},
  {"id":4,"name":"html"},
  {"id":5,"name":"css"}
]
  constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params : ParamMap) =>{
      let id =parseInt(params.get('id'));
      params.get('id');
      this.selectedid=id;
    });
  }

  onSelect(dept){
    this.router.navigate(['/navbar/departments/',dept.id]);

  }

  isSelected(dept){
   return dept.id === this.selectedid;
  }
}

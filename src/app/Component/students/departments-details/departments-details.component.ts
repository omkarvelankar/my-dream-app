import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
@Component({
  selector: 'app-departments-details',
  templateUrl: './departments-details.component.html',
  styleUrls: ['./departments-details.component.css']
})
export class DepartmentsDetailsComponent implements OnInit {
  public departmentid
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params : ParamMap) =>{
      let id =parseInt(params.get('id'));
      params.get('id');
      this.departmentid=id;
    });

}

previous(){
let previousid =this.departmentid -1;
this.router.navigate(['/navbar/departments',previousid]);
}

next(){
let nextid =this.departmentid +1;
this.router.navigate(['/navbar/departments',nextid]);

}
}


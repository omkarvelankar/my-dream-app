import { Component, OnInit } from '@angular/core';
import{ FormGroup,FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css']
})
export class StructuralComponent implements OnInit {


  
  condition = false;

  students: any;
  
  constructor(private fb:FormBuilder) {

    this.createUserForm();
  }

  userform:FormGroup;
  createUserForm(){
    this.userform=this.fb.group({
      username : ['',Validators.required],
      email : ['',Validators.compose([Validators.required,Validators.email])]
    });
  }


  setStudentColor(studentName){
    switch(studentName) {
      case 'omkar': return 'blue';
      case 'suraj': return 'orange';
      case 'amol': return 'green';
      case 'ali': return 'black';
      case 'abhay': return 'yellow';
    }
  }



ngOnInit() {
  }


  OnclickMessage(){
    console.log("click event is called");
    alert("hello");
  }

  getTemplateValue : any;
  getInputValue(value: any){
  this.getTemplateValue = value
  }

  variableName  : any;

  submitFunction(){
  if(this.userform.valid){
    alert("User Submited Successfully");

}
else{
  alert("All fields are required");
}

}}
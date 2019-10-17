import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-templatedrivenform',
  templateUrl: './templatedrivenform.component.html',
  styleUrls: ['./templatedrivenform.component.css']
})
export class TemplatedrivenformComponent implements OnInit {

  username = new FormControl(['', Validators.required]);
  password = new FormControl(['', Validators.required]);

  constructor() { }

  onSubmit() {
    if (this.username.value.valid && this.password.value.valid) {
  alert("Submitted successfully");
    }else{
      
     this.username.markAsTouched();
     this.password.markAsTouched();
    }
  }
  ngOnInit() {
  }

}

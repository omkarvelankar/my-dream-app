import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule,ReactiveFormsModule}from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StructuralComponent } from './Component/structural/structural.component';
import { StudentformComponent } from './Component/studentform/studentform.component';
import { DesignportlandComponent } from './Component/designportland/designportland.component';
import { DirectiveComponent } from './Component/directive/directive.component';
import { from } from 'rxjs';
import { Loginform1Component } from './Component/loginform1/loginform1.component';
import { TemplatedrivenformComponent } from './Component/templatedrivenform/templatedrivenform.component';
import { EployeelistComponent } from './Component/employees/eployeelist/eployeelist.component';
import { EmployeetableComponent } from './Component/employees/employeetable/employeetable.component';
import { EmployeeService } from './Services/employee.service';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { DepartmentsComponent } from './Component/students/departments/departments.component';
import { StudentsComponent } from './Component/students/students/students.component';
import { PagenotfoundComponent } from './Component/pagenotfound/pagenotfound.component';
import { DepartmentsDetailsComponent } from './Component/students/departments-details/departments-details.component';


@NgModule({
  declarations: [
    AppComponent,
    StructuralComponent,
    StudentformComponent,
    DesignportlandComponent,
    DirectiveComponent,
    Loginform1Component,
    TemplatedrivenformComponent,
    EployeelistComponent,
    EmployeetableComponent,
    NavbarComponent,
    DepartmentsComponent,
    StudentsComponent,
    PagenotfoundComponent,
    DepartmentsDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

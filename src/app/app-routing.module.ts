import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StructuralComponent } from './Component/structural/structural.component';
import { StudentformComponent } from './Component/studentform/studentform.component';
import { DesignportlandComponent } from './Component/designportland/designportland.component';
import { DirectiveComponent } from './Component/directive/directive.component';
import { Loginform1Component } from './Component/loginform1/loginform1.component';
import { TemplatedrivenformComponent } from './Component/templatedrivenform/templatedrivenform.component';
import { EmployeetableComponent } from './Component/employees/employeetable/employeetable.component';
import { EployeelistComponent } from './Component/employees/eployeelist/eployeelist.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { StudentsComponent } from './Component/students/students/students.component';
import { DepartmentsComponent } from './Component/students/departments/departments.component';
import { PagenotfoundComponent } from './Component/pagenotfound/pagenotfound.component';
import { DepartmentsDetailsComponent } from './Component/students/departments-details/departments-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'navbar',
    pathMatch: 'full'
  },
  
  {
    path: 'structural'
    , component:
      StructuralComponent
  },

  {
    path: 'studentform',
    component:
      StudentformComponent
  },

  {
    path: 'designportland',
    component: DesignportlandComponent
  },

{
  path: 'directive',
  component: DirectiveComponent
},
{
  path:'loginform1',
  component: Loginform1Component
},
{
  path:'templatedrivenform',
  component: TemplatedrivenformComponent
},
{
  path:'employeetable',
  component: EmployeetableComponent
},
{
path:'employeelist',
component:EployeelistComponent
},
{
path:'navbar',
component : NavbarComponent,
children:[
  {
    path:'students',
    component : StudentsComponent
  },
  
  {
    path:'departments',
    component:DepartmentsComponent
  },
  {
    path:'departments/:id',
    component:DepartmentsDetailsComponent
  }

]
},

{
  path:'**',component:PagenotfoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

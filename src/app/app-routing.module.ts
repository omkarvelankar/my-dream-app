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

const routes: Routes = [
  {
    path: '',
    redirectTo: 'employeelist',
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
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

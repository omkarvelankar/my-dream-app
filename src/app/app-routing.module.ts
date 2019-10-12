import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StructuralComponent } from './Component/structural/structural.component';
import { StudentformComponent } from './Component/studentform/studentform.component';
import { DesignportlandComponent } from './Component/designportland/designportland.component';
import { DirectiveComponent } from './Component/directive/directive.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'structural',
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
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

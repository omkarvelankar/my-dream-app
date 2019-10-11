import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StructuralComponent } from './Component/structural/structural.component';
import { StudentformComponent } from './Component/studentform/studentform.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

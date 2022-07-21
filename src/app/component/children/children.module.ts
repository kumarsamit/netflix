import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildrenComponent } from './children.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: ChildrenComponent
}];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ChildrenModule { }

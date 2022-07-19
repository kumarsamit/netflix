import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404Component } from './error404.component';
import { RouterModule, Routes } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';



const routes: Routes = [{
  path: '',
  component:  Error404Component

}];


@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Error404Module { }

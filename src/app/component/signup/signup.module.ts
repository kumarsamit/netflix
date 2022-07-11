import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [{
  path: '',
  component:  SignupComponent

}];


@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SignupModule { }

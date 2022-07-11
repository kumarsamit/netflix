import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{
  path: '',
  component:  LandingPageComponent
}];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class LandingPageModule { }

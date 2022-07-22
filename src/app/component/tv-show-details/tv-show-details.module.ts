import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvShowDetailsComponent } from './tv-show-details.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{
  path: '',
  component:  TvShowDetailsComponent

}];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class TvShowDetailsModule { }

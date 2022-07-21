import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon';
import { LandingPageComponent } from './landing/landing-page/landing-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";
import { FooterComponent } from './common-component/footer/footer.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MoviesComponent } from './component/movies/movies.component';
import { MovieDetailsComponent } from './component/movie-details/movie-details.component';
import { Error404Component } from './component/error404/error404.component';
import { HttpClientModule } from '@angular/common/http';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SigninComponent } from './component/signin/signin.component';
import { SignupComponent } from './component/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './common-component/header/header.component';
import { PreviewComponent } from './component/preview/preview.component';






@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    FooterComponent,
    MoviesComponent,
    MovieDetailsComponent,
    Error404Component,
    SigninComponent,
  HeaderComponent,
    SignupComponent,
    PreviewComponent,

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule,
    SlickCarouselModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



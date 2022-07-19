import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./landing/landing-page/landing-page.module').then((m) => m.LandingPageModule)
  },
  {
    path:'signin',
    loadChildren: () => import('./component/signin/signin.module').then((m) => m.SigninModule)
  },
  {
    path:'signup',
    loadChildren: () => import('./component/signup/signup.module').then((m) => m.SignupModule)
  },
  {
    path:'movies',
    loadChildren: () => import('./component/movies/movies.module').then((m) => m.MoviesModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

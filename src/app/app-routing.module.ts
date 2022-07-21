import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './auth-guard/auth-guard.guard';

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
    canActivate:[AuthGuardGuard],
    loadChildren: () => import('./component/movies/movies.module').then((m) => m.MoviesModule)
  },{
    path:'movies/:id',
    canActivate:[AuthGuardGuard],
    loadChildren: () => import('./component/movie-details/movie-details.module').then((m)=> m.MovieDetailsModule)
  },
  {
    path:'**',
    canActivate:[AuthGuardGuard],
    loadChildren:() => import('./component/error404/error404.module').then((m) => m.Error404Module)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

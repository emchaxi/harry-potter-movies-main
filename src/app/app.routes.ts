import { Routes, provideRouter, withDebugTracing } from '@angular/router';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { ApplicationConfig } from '@angular/core';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';

export const routes: Routes = [
  {
    path: 'movies',
    component: MovieListComponent,
  },
  {
    path: 'movie/:id',
    component: MovieDetailsComponent,
  },
];

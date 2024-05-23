import { Component, OnInit, inject } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Movie } from '../shared/movie.model';
import { CommonModule } from '@angular/common';
import { MovieService } from '../shared/movie.service';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { FilterMoviesPipe } from '../shared/filter-movies.pipe';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
})
export class MovieListComponent implements OnInit {
  movieService = inject(MovieService);
  movieList$!: Observable<Movie[]>;
  filteredMovies$!: Observable<Movie[]>;
  titleControl = new FormControl('');
  releaseYearControl = new FormControl('');

  ngOnInit() {
    this.movieList$ = this.movieService.getMovies();
    this.filteredMovies$ = combineLatest([
      this.movieList$,
      this.titleControl.valueChanges.pipe(startWith('')),
      this.releaseYearControl.valueChanges.pipe(startWith('')),
    ]).pipe(
      map(([movies, title, year]) =>
        new FilterMoviesPipe().transform(movies, title || '', year || '')
      )
    );
  }
}

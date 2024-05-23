import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MovieService } from '../shared/movie.service';
import { Observable } from 'rxjs';
import { Movie } from '../shared/movie.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
  standalone: true,
  imports: [[CommonModule, RouterModule]],
})
export class MovieDetailsComponent implements OnInit {
  movieId!: string | null;
  movieService = inject(MovieService);
  constructor(private route: ActivatedRoute) {}
  movie$!: Observable<Movie>;
  ngOnInit(): void {
    this.movieId = this.route.snapshot.paramMap.get('id');
    if (this.movieId !== null) {
      this.movie$ = this.movieService.getMovieById(this.movieId!);
    }
  }

  getBoxOfficeDisplay(value?: string): string {
    try {
      if (value !== undefined) {
        const numValue = parseFloat(value);
        if (numValue < 10) {
          return `${value} billion`;
        } else {
          return `${value} million`;
        }
      } else {
        return 'not found!';
      }
    } catch {
      return 'not found!';
    }
  }
}

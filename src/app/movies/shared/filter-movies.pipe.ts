import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../shared/movie.model';

@Pipe({
  name: 'filterMovies',
})
export class FilterMoviesPipe implements PipeTransform {
  transform(movies: Movie[], title: string, year: string): Movie[] {
    if (!movies) return [];
    if (!title && !year) return movies;

    return movies.filter((movie) => {
      const matchesTitle = title
        ? movie.title.toLowerCase().includes(title.toLowerCase())
        : true;
      const matchesYear = year
        ? new Date(movie.release_date).getFullYear().toString().startsWith(year)
        : true;
      return matchesTitle && matchesYear;
    });
  }
}

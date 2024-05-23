import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl = '/movies';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl);
  }

  getMovieById(id: string): Observable<Movie> {
    return this.http.get<Movie>(`${this.apiUrl}/${id}`);
  }
}

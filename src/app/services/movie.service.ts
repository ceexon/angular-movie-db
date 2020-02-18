import {EventEmitter, Injectable} from '@angular/core';
import {Movie} from '../models/movie.model';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) {
  }

  private movies: Movie[] = [];

  baseURL = environment.baseApiURL;
  apiKey = environment.apiKey;
  baseImg = environment.baseImageURL;

  private favourites: Movie[] = this.movies.filter(m => m.favorite === true );

  favoritesUpdated = new EventEmitter<Movie[]>();
  moviesUpdated = new EventEmitter<Movie[]>();

  setMovies(movies: Movie[]) {
    this.movies = movies;
  }

  fetUpcoming(): Observable <any> {
    return this.http.get<any>(`${this.baseURL}movie/upcoming?api_key=${this.apiKey}`);
  }

  getMovie(id: number) {
    return this.movies.find(
      (movie) => {
        return movie.id === id;
      }
    );
  }

  getFavorites() {
    return this.favourites;
  }

  toggleFavorite(movie: Movie) {
    const favMovie = this.movies.find(
    (mov) => {
        return mov.id === movie.id;
      }
    );
    if (favMovie.favorite) {
      this.favourites = this.favourites.filter(mov => mov !== movie);
    } else {
      this.favourites.push(movie);
    }
    favMovie.favorite = !favMovie.favorite;
    this.favoritesUpdated.emit(this.favourites.slice());
    this.moviesUpdated.emit(this.movies.slice());
  }

  getImage(path: string, size: string) {
    return this.baseImg + size + path;
  }
}

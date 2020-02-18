import {EventEmitter, Injectable} from '@angular/core';
import {Movie} from '../models/movie.model';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MovieDetailModel} from '../models/movie-detail.model';

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

  private favourites: any[] = this.movies.filter(m => m.favorite === true );

  favoritesUpdated = new EventEmitter<Movie[]>();
  moviesUpdated = new EventEmitter<Movie[]>();

  setMovies(movies: Movie[]) {
    if (this.favourites.length > 0) {
        this.favourites.forEach(fav => {
          const movie = movies.find(
    (mov) => {
              return mov.id === fav.id;
            });
          if (movie) { movie.favorite = true; }
      });
    }

    this.movies = movies;
  }

  fetUpcoming(): Observable <any> {
    return this.http.get<any>(`${this.baseURL}movie/upcoming?api_key=${this.apiKey}`);
  }

  getMovie(id: number) {
    return this.http.get<any>(`${this.baseURL}movie/${id}?api_key=${this.apiKey}`);
  }

  getFavorites() {
    return this.favourites.slice();
  }

  isFavorite(movie: any) {
    return this.movies.find(
    (mov) => {
        return mov.id === movie.id;
      }
    );
  }

  toggleFavorite(movie: any) {
    const favMovie = this.isFavorite(movie);
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

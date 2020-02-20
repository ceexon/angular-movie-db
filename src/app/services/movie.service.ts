import {EventEmitter, Injectable} from '@angular/core';
import {Movie} from '../models/movie.model';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MovieDetailModel} from '../models/movie-detail.model';
import {UpcomingMoviesModels} from '../models/upcoming-movies.models';
import {GenreModel} from '../models/genre.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movies: Movie[] = [];
  private genres: GenreModel[] = [];


  baseURL = environment.baseApiURL;
  apiKey = environment.apiKey;
  baseImg = environment.baseImageURL;

  private favourites: Movie[] | MovieDetailModel[] | any[] = this.movies.filter(m => m.favorite === true );
  constructor(private http: HttpClient) {
  }

  favoritesUpdated = new EventEmitter<Movie[]>();
  moviesUpdated = new EventEmitter<Movie[]>();
  favoriteWasUpdated = new EventEmitter<Movie | MovieDetailModel>();

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

  fetUpcoming(): Observable < UpcomingMoviesModels > {
    return this.http.get< UpcomingMoviesModels >(`${this.baseURL}movie/upcoming?api_key=${this.apiKey}`);
  }

  fetGenres(): Observable < {genres: GenreModel[]} > {
    return this.http.get< {genres: GenreModel[]} >(`${this.baseURL}genre/movie/list?api_key=${this.apiKey}`);
  }

  getMovie(id: number) {
    return this.http.get<MovieDetailModel>(`${this.baseURL}movie/${id}?api_key=${this.apiKey}`);
  }

  searchMovie(query: string): Observable < UpcomingMoviesModels > {
    // return this.http.get<UpcomingMoviesModels>(`${this.baseURL}movie/search?query=${query}&api_key=${this.apiKey}`);
    return this.http.get<UpcomingMoviesModels>(`${this.baseURL}search/movie?api_key=${this.apiKey}&query=${query}`);
  }

  addMovie(movie: Movie) {
    this.movies.push(...[movie]);
  }

  getGenres() {
    return this.genres;
  }

  setGenres(genres: GenreModel[]) {
    this.genres = genres;
  }

  getFavorites() {
    return this.favourites.slice();
  }

  isFavorite(movie: Movie| MovieDetailModel ) {
    return this.favourites.find(
    (mov) => {
        return mov.id === movie.id;
      }
    );
  }

  toggleFavorite(movie: MovieDetailModel | Movie) {
    if ('genres' in movie && this.movies.length) {
      // get equivalent movie from upcoming list
      const initialFav = movie.favorite;
      movie.favorite = !movie.favorite;
      movie = this.movies.find(mov => {
        return mov.id === movie.id;
      });
      movie.favorite = initialFav;
    }
    if (movie.favorite) {
      this.favourites = this.favourites.filter(mov => mov.id !== movie.id);
    } else {
      this.favourites.push(...[movie]);
    }
    movie.favorite = !movie.favorite;
    this.favoriteWasUpdated.emit(movie);
    this.favoritesUpdated.emit(this.favourites.slice());
    this.moviesUpdated.emit(this.movies.slice());
  }

  getImage(path: string, size: string) {
    return this.baseImg + size + path;
  }
}

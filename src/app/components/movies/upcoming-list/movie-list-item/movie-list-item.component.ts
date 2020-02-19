import {Component, Input, OnInit} from '@angular/core';
import {Movie} from '../../../../models/movie.model';
import {MovieService} from '../../../../services/movie.service';
import {Router} from '@angular/router';
import {GenreModel} from '../../../../models/genre.model';
import {MovieDetailModel} from '../../../../models/movie-detail.model';

@Component({
  selector: 'app-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.scss']
})
export class MovieListItemComponent implements OnInit {

  @Input() movie: Movie | MovieDetailModel;
  genres: GenreModel[] = [];

  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit(): void {
    if (this.movieService.getGenres().length <= 0) {
      this.movieService.fetGenres().subscribe(
        (genres: {genres: GenreModel[]}) => {
          this.genres = genres.genres;
          this.movieService.setGenres(genres.genres);
          this.setMovieGenres();
      });
    } else {
      this.genres = this.movieService.getGenres();
      this.setMovieGenres();
    }

  }

  onSelectMovie() {
    this.router.navigate(['/movie/details', this.movie.id]);
  }

  onToggleFavorite() {
    this.movieService.toggleFavorite(this.movie);
  }

  onLoadImage(path: string, size: string) {
    return this.movieService.getImage(path, size);
  }

  filterGenres(genres: GenreModel[]) {
    const movieGenres = [];
    genres.map(genre => {
      // @ts-ignore
      if (this.movie.genre_ids.includes(genre.id)) {
        movieGenres.push(genre);
      }
    });
    return movieGenres;
  }

  setMovieGenres() {
    if ('genre_ids' in this.movie) {
        this.genres = this.filterGenres(this.genres);
      } else  {
        this.genres = this.movie.genres;
      }
  }
}

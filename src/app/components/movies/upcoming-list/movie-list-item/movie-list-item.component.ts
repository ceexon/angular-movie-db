import {Component, Input, OnInit} from '@angular/core';
import {Movie} from '../../../../models/movie.model';
import {MovieService} from '../../../../services/movie.service';

@Component({
  selector: 'app-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.scss']
})
export class MovieListItemComponent implements OnInit {

  @Input() movie: Movie;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }

  onSelectMovie() {
    this.movieService.selectMovie.emit(this.movie);
  }

}

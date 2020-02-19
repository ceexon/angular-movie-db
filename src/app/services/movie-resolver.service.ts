import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {MovieService} from './movie.service';
import {Observable} from 'rxjs';
import {MovieDetailModel} from '../models/movie-detail.model';

@Injectable({
  providedIn: 'root'
})
export class MovieResolverService implements Resolve<MovieDetailModel> {

  constructor(private movieService: MovieService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable <MovieDetailModel> | Promise <MovieDetailModel> | MovieDetailModel {
    return this.movieService.getMovie(+route.params.id);
  }
}

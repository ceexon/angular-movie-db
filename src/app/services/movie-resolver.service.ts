import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Movie} from '../models/movie.model';
import {MovieService} from './movie.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieResolverService implements Resolve<Movie> {

  constructor(private movieService: MovieService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable <Movie> | Promise <Movie> | Movie {
    return this.movieService.getMovie(+route.params.id);
  }
}

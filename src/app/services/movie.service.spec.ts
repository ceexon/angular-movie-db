import {async, inject, TestBed} from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { MovieService } from './movie.service';
import {environment} from '../../environments/environment';

const baseURL = environment.baseApiURL;
const apiKey = environment.apiKey;

describe('MovieService', () => {
  let service: MovieService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        MovieService
      ],
    });
    service = TestBed.inject(MovieService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it(`should fetch movies as an Observable`, async(inject([HttpTestingController, MovieService],
    (httpClient: HttpTestingController, movieService: MovieService) => {

      const movies = [
          {id: 1, title: 'movie title'},
          {id: 2, title: 'movie title'},
        ];

      movieService.fetUpcoming().subscribe(
        (mov: any) => {
          expect(mov).toEqual(movies);
        }
      );
      const req = httpMock.expectOne(`${baseURL}movie/upcoming?api_key=${apiKey}`);
      expect(req.request.method).toBe('GET');

      req.flush(movies);
      httpMock.verify();
    })));

  it(`should fetch movies as an Observable`, async(inject([HttpTestingController, MovieService],
    (httpClient: HttpTestingController, movieService: MovieService) => {
      const movie = {id: 1, title: 'movie title'};
      movieService.getMovie(1).subscribe(
        (mov: any) => {
          expect(mov).toBe(movie);
        }
      );
      const req = httpMock.expectOne(`${baseURL}movie/1?api_key=${apiKey}`);
      expect(req.request.method).toBe('GET');

      req.flush(movie);
      httpMock.verify();
  })));
});

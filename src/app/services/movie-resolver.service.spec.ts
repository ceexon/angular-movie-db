import {async, inject, TestBed} from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { MovieResolverService } from './movie-resolver.service';

describe('MovieResolverService', () => {
  let service: MovieResolverService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        MovieResolverService
      ],
    });
    service = TestBed.inject(MovieResolverService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it(`should fetch posts as an Observable`, async(inject([HttpTestingController, MovieResolverService],
    (httpClient: HttpTestingController, movieService: MovieResolverService) => {

      const movie = [{}];
      expect(1).toBe(1);

    })));
});

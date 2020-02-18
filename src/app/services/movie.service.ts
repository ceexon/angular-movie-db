import {EventEmitter, Injectable} from '@angular/core';
import {Movie} from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  private movies: Movie[] = [
    new Movie(
      1,
      '1917',
      'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz ' +
      'graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! ' +
      'Fox nymphs grab quick-jived waltz.',
      ['comedy', 'action'],
      'Time is the Enemy',
      'Released',
      8.9,
      '21-12-2019',
      'assets/images/1917.jpg',
      '/link-to-backdrop',
      true
    ),
    new Movie(
      2,
      'Birds Of Prey',
      'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz ' +
      'graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! ' +
      'Fox nymphs grab quick-jived waltz.',
      ['comedy', 'action'],
      'Comedy with some action is good',
      'Released',
      8.7,
      '21-12-2019',
      'assets/images/birdsofprey.jpg',
      '/link-to-backdrop',
      false
    ),
    new Movie(
      3,
      'Trick',
      'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz ' +
      'graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! ' +
      'Fox nymphs grab quick-jived waltz.',
      ['horror', 'thriller', 'syfy'],
      'Comedy with some action is good',
      'Released',
      8,
      '21-12-2019',
      'assets/images/trick.jpg',
      '/link-to-backdrop',
      false
    ),
    new Movie(
      4,
      'Buffaloed',
      'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz ' +
      'graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! ' +
      'Fox nymphs grab quick-jived waltz.',
      ['comedy', 'action'],
      'Comedy with some action is good',
      'Released',
      9,
      '21-12-2019',
      'assets/images/buffaloed-1.jpg',
      '/link-to-backdrop',
      false
    ),
    new Movie(
      5,
      'Doctor DoLittle',
      'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz ' +
      'graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! ' +
      'Fox nymphs grab quick-jived waltz.',
      ['comedy', 'adventure', 'epic'],
      'Comedy with some action is good',
      'Released',
      6.9,
      '21-12-2019',
      'assets/images/dolittle.jpg',
      '/link-to-backdrop',
      false
    ),
    new Movie(
      6,
      'Jojo Rabbit',
      'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz ' +
      'graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! ' +
      'Fox nymphs grab quick-jived waltz.',
      ['comedy', 'action'],
      'Comedy with some action is good',
      'Released',
      8.6,
      '21-12-2019',
      'assets/images/jojo-rabbit.jpg',
      '/link-to-backdrop',
      false
    ),
    new Movie(
      7,
      'Jumanji The Next Level',
      'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz ' +
      'graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! ' +
      'Fox nymphs grab quick-jived waltz.',
      ['comedy', 'action'],
      'Comedy with some action is good',
      'Released',
      8.3,
      '21-12-2019',
      'assets/images/jumanji.jpg',
      '/link-to-backdrop',
      true
    ),
    new Movie(
      8,
      'IP Man 4',
      'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz ' +
      'graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! ' +
      'Fox nymphs grab quick-jived waltz.',
      ['action'],
      'Comedy with some action is good',
      'Released',
      8.3,
      '21-12-2019',
      'assets/images/ipman4.jpg',
      '/link-to-backdrop',
      false
    ),
  ];

  private favourites: Movie[] = this.movies.filter(m => m.favorite === true );

  favoritesUpdated = new EventEmitter<Movie[]>();
  moviesUpdated = new EventEmitter<Movie[]>();

  getMovies() {
    return this.movies.slice();
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
}

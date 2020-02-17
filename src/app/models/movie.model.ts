export class Movie {
  public id: number;
  public title: string;
  public overview: string;
  public genres: string[];
  public tagline: string;
  public status: string;
  public favorite: boolean;
  public rating: number; /* Vote_average*/
  public releaseDate: string; /* release_date */
  public poster: string; /* poster_path */
  public backdrop: string; /* backdrop_path */

  constructor(
    id: number,
    title: string,
    overview: string,
    genres: string[],
    tagline: string,
    status: string,
    rating: number,
    releaseDate: string,
    poster: string,
    backdrop: string,
    favorite: boolean
    ) {
      this.id = id;
      this.title = title;
      this.overview = overview;
      this.genres = genres;
      this.tagline = tagline;
      this.status = status;
      this.rating = rating;
      this.releaseDate = releaseDate;
      this.poster = poster;
      this.backdrop = backdrop;
      this.favorite = favorite;
  }
}

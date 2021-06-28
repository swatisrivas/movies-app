import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Movie } from "./movie";

@Injectable({
  providedIn: "root",
})
export class MovieService {
  private allMovieUrl: string = "http://localhost:8089/get-movies";
  private movieByCategoryUrl: string = "http://localhost:8089";
  private movieByLanguageUrl: string = "http://localhost:8089";
  private movieByActorsUrl: string = "http://localhost:8089";

  private _url = "assets/data/movies.json";

  constructor(private httpClient: HttpClient) {}

  getAllMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this._url);
  }
  getByCategory(category: string): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this._url);
  }
  getByLanguage(language: string): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this._url);
  }
  getByActors(actors: string): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this._url);
  }
}

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Movie } from "../movie";
import { MovieService } from "../movie.service";

@Component({
  selector: "app-client-movie-list",
  templateUrl: "./client-movie-list.component.html",
  styleUrls: ["./client-movie-list.component.css"],
})
export class ClientMovieListComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  movies: Movie[];
  allMovies: Movie[];

  ngOnInit() {
    const param1: string = this.route.snapshot.params.param1;
    const param2: string = this.route.snapshot.params.param2;

    this.fetchMovieByCategory(param1, param2);
  }

  public filterMovies = (key: string): void => {
    this.movies = this.allMovies.filter(
      (movie) => movie.name.toLowerCase().indexOf(key.toLowerCase()) > -1
    );
  };

  fetchMovieByCategory(param1: string, param2: string) {
    if (param2) {
      switch (param1) {
        case "category":
          this.movieService.getByCategory(param2).subscribe((data: any) => {
            console.log("CATEGORIES");
            this.movies = data.movies;

            //Next line to be commented on integration with back end
            this.movies = data.movies.filter(
              (movie) => movie.category.toLowerCase().indexOf(param2.toLowerCase()) > -1
            );
            console.log(this.movies);
          });
          break;
        case "language":
          this.movieService.getByLanguage(param2).subscribe((data: any) => {
            console.log("LANGUAGE");
            this.movies = data.movies;
            //Next line to be commented on integration with back end
            this.movies = data.movies.filter(
              (movie) => movie.language.toLowerCase().indexOf(param2.toLowerCase()) > -1
            );
            console.log(this.movies);
          });
          break;
        case "actor":
          this.movieService.getByActors(param2).subscribe((data: any) => {
            console.log("ACTORS");
            this.movies = data.movies;
            //Next line to be commented on integration with back end
            this.movies = data.movies.filter(
              (movie) => movie.actors.toLowerCase().indexOf(param2.toLowerCase()) > -1
            );
            console.log(this.movies);
          });
          break;
      }
    }
    this.movieService.getAllMovies().subscribe((data: any) => {
      console.log("ALL");
      if (!param2) {
        this.movies = data.movies;
      }
      this.allMovies = data.movies;
      console.log(this.movies);
    });
  }
}

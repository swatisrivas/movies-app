import { Component, Input, OnInit } from "@angular/core";
import { Movie } from "../movie";

@Component({
  selector: "app-movie-card",
  templateUrl: "./movie-card.component.html",
  styleUrls: ["./movie-card.component.css"],
})
export class MovieCardComponent implements OnInit {
  constructor() {}

  @Input() movie:Movie

  ngOnInit() {}
}

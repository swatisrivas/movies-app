import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ClientMovieListComponent } from "./client-movie-list/client-movie-list.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: "movies/:param1/:param2",
    pathMatch: "full",
    component: ClientMovieListComponent,
  },
  { path: "movies", pathMatch: "full", component: ClientMovieListComponent },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

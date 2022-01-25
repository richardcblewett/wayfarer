import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CitiesComponent} from './cities/cities.component';
import {HomeComponent} from './home/home.component';
import {PostsComponent} from './cities/posts/posts.component';
import {SearchComponent} from "./search/search.component";


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "cities/:id", component: CitiesComponent},
  {path: "cities/:id/posts/:id", component: PostsComponent},
  {path: "search", component: SearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesComponent } from './cities.component';
import { PostsComponent } from './posts/posts.component';

const citiesRoutes: Routes = [{
    path: "cities/:id",
    component: CitiesComponent,
    children: [{
        path: "posts/:id",
        component: PostsComponent,
    }]
}]
@NgModule({
    imports: [
        RouterModule.forChild(citiesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class CitiesRoutingModule{}


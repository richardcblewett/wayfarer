import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesComponent } from './cities.component';
import { PostComponent } from './posts/post/post.component';


const citiesRoutes: Routes = [{
    path: "cities/:id",
    component: CitiesComponent,
    children: [{
        path: "posts/:id",
        component: PostComponent,
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


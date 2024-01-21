import { RouterModule,Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/pages/home/home.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},   
    {path:'search/:searchTerm',component: HomeComponent},
    {path:'food/:id',component:FoodPageComponent}
];


@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {

}

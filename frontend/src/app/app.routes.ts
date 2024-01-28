import { RouterModule,Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/pages/home/home.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { FoodService } from './services/food.service';

export const routes: Routes = [
    {path:'',component:HomeComponent},   
    {path:'search/:searchTerm',component: HomeComponent},
    {path:'food/:id',component:FoodPageComponent},
    {path:'tag/:tag',component:HomeComponent},
    {path:'cart-page',component:CartPageComponent}
];


@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],
    providers:[FoodService]
})

export class AppRoutingModule {

}

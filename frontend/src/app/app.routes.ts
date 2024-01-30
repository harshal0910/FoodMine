import { RouterModule,Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/pages/home/home.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { FoodService } from './services/food.service';
import { LoginPageComponent } from './components/partials/login-page/login-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { UserService } from './services/user.service';

export const routes: Routes = [
    {path:'',component:HomeComponent},   
    {path:'search/:searchTerm',component: HomeComponent},
    {path:'food/:id',component:FoodPageComponent},
    {path:'tag/:tag',component:HomeComponent},
    {path:'cart-page',component:CartPageComponent},
    {path:'login',component:LoginPageComponent},
];


@NgModule({
    imports:[BrowserModule,BrowserAnimationsModule,RouterModule.forRoot(routes),HttpClientModule,ReactiveFormsModule,ToastrModule.forRoot({
        timeOut:3000,
        positionClass:'toast-bottom-right',
        newestOnTop:false
    })],
    exports:[RouterModule],
    providers:[FoodService]
})

export class AppRoutingModule {

}

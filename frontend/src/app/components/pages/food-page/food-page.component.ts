import { Component, OnInit } from '@angular/core';
import { Food } from '../../../Shared/Models/Food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../../../services/food.service';
import { StarRatingComponent } from '../../partials/star-rating/star-rating.component';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../services/cart.service';
import { NotFoundComponent } from '../../partials/not-found/not-found.component';

@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [StarRatingComponent,CommonModule,NotFoundComponent],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css',
  providers:[FoodService]
})
export class FoodPageComponent implements OnInit {
  food!:Food
  constructor(activatedRoute:ActivatedRoute,foodService:FoodService,private cartService:CartService,private router:Router){
    activatedRoute.params.subscribe((params)=>{
      if(params.id)
      {
        foodService.getFoodById(params.id)
        .subscribe((serverFood: Food) =>{
          this.food = serverFood;
        });
      }
    })
  }

  ngOnInit(): void {
    
  }

  addTOCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }

}


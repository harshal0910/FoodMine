import { Component, OnInit } from '@angular/core';
import { Food } from '../../../Shared/Models/Food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../../../services/food.service';
import { StarRatingComponent } from '../../partials/star-rating/star-rating.component';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../services/cart.service';
@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [StarRatingComponent,CommonModule],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent implements OnInit {
  food!:Food
  constructor(activatedRoute:ActivatedRoute,foodService:FoodService,private cartService:CartService,private router:Router){
    activatedRoute.params.subscribe((params)=>{
      if(params.id)
      {
        this.food = foodService.getFoodById(params.id);
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

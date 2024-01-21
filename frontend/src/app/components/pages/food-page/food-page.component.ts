import { Component } from '@angular/core';
import { Food } from '../../../Shared/Models/Food';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../../../services/food.service';
import { StarRatingComponent } from '../../partials/star-rating/star-rating.component';

@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [StarRatingComponent],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent {
  food!:Food
  constructor(activatedRoute:ActivatedRoute,foodService:FoodService){
    activatedRoute.params.subscribe((params)=>{
      if(params.id)
      {
        this.food = foodService.getFoodById(params.id);
      }
    })
  }
}

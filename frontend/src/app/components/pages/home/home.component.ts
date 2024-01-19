import { Component,OnInit } from '@angular/core';
import { Food } from '../../../Shared/Models/Food';
import { FoodService } from '../../../services/food.service';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from '../../partials/star-rating/star-rating.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,StarRatingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  foods:Food[] = [];

  constructor(private foodService: FoodService) {
    this.foods = foodService.getAll();
  }
  ngOnInit(): void {
      
  }
}

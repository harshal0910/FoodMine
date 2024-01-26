import { Component,OnInit } from '@angular/core';
import { Food } from '../../../Shared/Models/Food';
import { FoodService } from '../../../services/food.service';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from '../../partials/star-rating/star-rating.component';
import { ActivatedRoute } from '@angular/router';
import { SearchComponent } from '../../partials/search/search.component';
import { TagsComponent } from '../../partials/tags/tags.component';
import { NotFoundComponent } from '../../partials/not-found/not-found.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,StarRatingComponent,SearchComponent,TagsComponent,NotFoundComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  foods:Food[] = [];

  constructor(private foodService: FoodService,activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm){
      this.foods = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
      }
      else if(params.tag){
        this.foods = this.foodService.getAllFoodsByTag(params.tag);
      }
      else
      this.foods = foodService.getAll();
    })
  }
  ngOnInit(): void {
      
  }
}

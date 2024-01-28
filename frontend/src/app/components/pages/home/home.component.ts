import { Component,OnInit } from '@angular/core';
import { Food } from '../../../Shared/Models/Food';
import { FoodService } from '../../../services/food.service';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from '../../partials/star-rating/star-rating.component';
import { ActivatedRoute } from '@angular/router';
import { SearchComponent } from '../../partials/search/search.component';
import { TagsComponent } from '../../partials/tags/tags.component';
import { NotFoundComponent } from '../../partials/not-found/not-found.component';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,StarRatingComponent,SearchComponent,TagsComponent,NotFoundComponent,HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers:[FoodService]
})
export class HomeComponent implements OnInit {

  foods:Food[] = [];

  constructor(private foodService: FoodService,activatedRoute:ActivatedRoute) {
    let foodsObservable:Observable<Food[]>;
    activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm){
        foodsObservable = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
      }
      else if(params.tag){
        foodsObservable = this.foodService.getAllFoodsByTag(params.tag);
      }
      else{
        foodsObservable = foodService.getAll();
      }
      foodsObservable.subscribe((serverFoods)=>{
          this.foods = serverFoods;
      })
    })
  }
  ngOnInit(): void {
      
  }
}
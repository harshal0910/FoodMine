import { Injectable } from '@angular/core';
import { Food } from '../Shared/Models/Food';
import { sample_foods } from '../components/partials/header/data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAll():Food[]{
    return sample_foods;
  };

  getAllFoodsBySearchTerm(searchTerm:string){
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  getFoodById(foodId:string):Food{
    return this.getAll().find(food => food.id == foodId) ?? new Food();
  }
  
}



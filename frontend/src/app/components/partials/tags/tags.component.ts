import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../../services/food.service';
import { Tag } from '../../../Shared/Models/Tag';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css',
  providers:[]
})
export class TagsComponent implements OnInit {

  tags?: Tag[];
  constructor(foodService:FoodService){
    foodService.getAllTags()
    .subscribe(serverTags =>{
      this.tags = serverTags;
    });
  }

  ngOnInit(): void {
  
}
}
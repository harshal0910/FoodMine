import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../../services/food.service';
import { Tag } from '../../../Shared/Models/Tag';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent implements OnInit {

  tags?: Tag[];
  constructor(foodService:FoodService){
    this.tags = foodService.getAllTags();
  }

  ngOnInit(): void {
  
}
}

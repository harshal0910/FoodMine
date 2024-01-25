import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent implements OnInit {
  ngOnInit(): void {
    
  }
  constructor(){

  }

  @Input()
  title!:string;

  @Input()
  margin?= '1rem 0 1rem 0.2rem';
  
}

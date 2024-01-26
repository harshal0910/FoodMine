import { Component,Input,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {
  @Input()
  visible = false;
  @Input()
  notFoundMessage = "Nothing Found";
  @Input()
  resetLinkRoute = "/";
  @Input()
  resetLinkText = "Reset";
  constructor(){

  }

  ngOnInit():void{

  }
}

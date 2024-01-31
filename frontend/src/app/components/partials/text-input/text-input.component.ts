import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  standalone: true,
  imports: [],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.css'
})
export class TextInputComponent implements OnInit{

  @Input()
  control!:AbstractControl
  @Input()
  showErrorsWhen:boolean =  true;
  @Input()
  label!:string
  @Input()
  type:'text' | 'password' | 'email' = 'text';
  constructor(){

  }

  ngOnInit(): void {
    
  }

}

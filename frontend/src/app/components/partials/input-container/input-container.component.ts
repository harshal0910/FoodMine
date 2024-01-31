import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

const VALIDATORS_MESSAGE:any={
  required:'Should not be empty',
  email:'Email is not valid'
}

@Component({
  selector: 'input-container',
  standalone: true,
  imports: [],
  templateUrl: './input-container.component.html',
  styleUrl: './input-container.component.css'
})
export class InputContainerComponent {

  @Input()
  control!:AbstractControl;
  label!:string;
  @Input()
  showErrorsWhen:boolean = true
  bgColor = 'white';
  constructor(){

  }

}

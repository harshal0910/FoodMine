import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TitleComponent } from '../title/title.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule,TitleComponent,ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
  providers:[ReactiveFormsModule]
})
export class LoginPageComponent implements OnInit {

  loginForm!:FormGroup
  isSubmitted = false;
  constructor( private formBuilder:FormBuilder){}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    });

  }

  get fc(){
    return this.loginForm.controls;
  }

  submit(){
    this.isSubmitted = true;
    if(this.loginForm.invalid)
      return;

    alert(`email : ${this.fc.email.value},
          password:${this.fc.password.value}`);
  }
}
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TitleComponent } from '../title/title.component';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { InputContainerComponent } from '../input-container/input-container.component';
import { InputValidationComponent } from '../input-validation/input-validation.component';
import { TextInputComponent } from '../text-input/text-input.component';

// export const ToastConfig = new InjectionToken<string>('TOAST_CONFIG')
@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule,TitleComponent,ReactiveFormsModule,InputContainerComponent,InputValidationComponent,TextInputComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
  providers:[ReactiveFormsModule,UserService]
})
export class LoginPageComponent implements OnInit {

  loginForm!:FormGroup
  isSubmitted = false;
  returnUrl = '';
  constructor( private formBuilder:FormBuilder,private userService:UserService
    ,private activatedRoute:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    });

    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl;
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

    this.userService.login({email:this.fc.email.value,password: this.fc.password.value})
    .subscribe(()=>{
      this.router.navigateByUrl(this.returnUrl)
    });
  }
}

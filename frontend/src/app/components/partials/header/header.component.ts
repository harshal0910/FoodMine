import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../services/user.service';
import { User } from '../../../Shared/Models/user';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  providers:[UserService]
})
export class HeaderComponent implements OnInit  {
  
  cartQuantity=0;
  user!:User;
  constructor(cartService:CartService,private userService:UserService){
    cartService.getCartObservable().subscribe((newCart)=>{
      this.cartQuantity = newCart.totalCount;
    })

    userService.userObservable.subscribe((newUser) =>{
      this.user = newUser;
    })
  }
    
  ngOnInit(): void {
    
  }

  logout(){
    this.userService.logout();
  }

  get isAuth(){
    console.log(this.user.token);
    return this.user.token;
  }  

}

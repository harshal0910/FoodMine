import { Component, OnInit } from '@angular/core';
import { Cart } from '../../../Shared/Models/Cart';
import { CartService } from '../../../services/cart.service';
import { CartItem } from '../../../Shared/Models/CartItem';
import { TitleComponent } from '../../partials/title/title.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule,TitleComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent implements OnInit {
  cart!: Cart;
  ngOnInit(): void {
    
  }

  constructor(private cartService:CartService){
    this.cartService.getCartObservable().subscribe((cart)=>{
      this.cart = cart;
    });
  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
  }

  changeQuantity(cartItem:CartItem,quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id,quantity);
  }


}

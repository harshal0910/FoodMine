import { Injectable,PLATFORM_ID,Inject } from '@angular/core';
import { Cart } from '../Shared/Models/Cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food } from '../Shared/Models/Food';
import { CartItem } from '../Shared/Models/CartItem';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})

export class CartService {
  private cart:Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  constructor() {  }
  addToCart(food:Food):void{
    let cartItem = this.cart.items.find(item =>item.food.id === food.id);
    if(cartItem){
      return;
    }
    this.cart.items.push(new CartItem(food));
    this.setCartToLocalStorage();
  }

  removeFromCart(foodId:string):void{
    this.cart.items = this.cart.items.filter(item => item.food.id != foodId);
    this.setCartToLocalStorage();
  }

  changeQuantity(foodId:string,quantity:number){
    let cartItem = this.cart.items.find(item => item.food.id === foodId);
    if(!cartItem){
      return;
    }
    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.food.price;
    this.setCartToLocalStorage();
  }
  clearCart(){
    this.cart = new Cart();
  }

  getCartObservable():Observable<Cart>{
    return this.cartSubject.asObservable();
  }

  private setCartToLocalStorage():void{
    this.cart.totalPrice = this.cart.items.reduce((prevSum,currentItem) => prevSum + currentItem.price,0)
    const cartJson = JSON.stringify(this.cart);

    this.cart.totalCount = this.cart.items
    .reduce((prevSum,currentItem)=> prevSum+currentItem.quantity,0)
    
    localStorage.setItem('Cart',cartJson);
    this.cartSubject.next(this.cart);
  }

  private getCartFromLocalStorage(): Cart {
    if (typeof localStorage !== 'undefined') {
      try {
        const cartJson = localStorage.getItem('Cart');
  
        if (cartJson) {
          return JSON.parse(cartJson);
        } else {
          console.log('No "Cart" item found in localStorage. Returning a new Cart.');
          return new Cart();
        }
      } catch (error) {
        console.error('Error while parsing "Cart" from localStorage:', error);
        console.log('Returning a new Cart due to the error.');
        return new Cart();
      }
    } else {
      console.error('localStorage is not available in this environment.');
      // Handle the lack of localStorage as needed, e.g., return a default Cart.
      return new Cart();
    }
  }
  
}

import { Injectable } from '@angular/core';
import { Product } from '../models/cart.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  data: Product[] = [
    { id: 1,
      name: 'STEAK',
      price: 350,
      qty: 1
    },
    { id: 2,
      name: 'MANTI',
      price: 40,
      qty: 1
    },
    { id: 3,
      name: 'PİLAV',
      price: 15,
      qty: 1
    },
    { id: 4,
      name: 'KURUFASULYE',
      price: 10,
      qty: 1
    },
    { id: 5,
      name: 'ÇORBA',
      price: 10,
      qty: 1
    },
    { id: 6,
      name: 'PİZZA',
      price: 60,
      qty: 1
    },
    { id: 7,
      name: 'BURGER',
      price: 45,
      qty: 1
    },
    { id: 8,
      name: 'SÜTLAÇ',
      price: 13,
      qty: 1
    },
    { id: 9,
      name: 'KAZANDİBİ',
      price: 12,
      qty: 1
    },
    { id: 10,
      name: 'CHEESECAKE',
      price: 20,
      qty: 1
    },
    { id: 11,
      name: 'FUSE TEA',
      price: 7,
      qty: 1
    },
    { id: 12,
      name: 'KOLA',
      price: 8,
      qty: 1
    },
    { id: 13,
      name: 'FANTA',
      price: 6,
      qty: 1
    },
    { id: 14,
      name: 'SODA',
      price: 3,
      qty: 1
    },
    { id: 15,
      name: 'SU',
      price: 2,
      qty: 1
    }

  ]

  private cart = []
  private cartItemCount = new BehaviorSubject(0);
  
  
  constructor() { }

  getProducts(){
    return this.data;
  }

  getCart(){
    return this.cart;
  }

  getCartItemCount(){
    return this.cartItemCount;
  }

  addProduct(product) {
    let added = false;
    for (let p of this.cart) {
      if (p.id === product.id) {
        p.qty += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }
 
  decreaseProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        p.qty -= 1;
        if (p.qty == 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }
 
  removeProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        this.cartItemCount.next(this.cartItemCount.value - p.qty);
        this.cart.splice(index, 1);
      }
    }
  }
}

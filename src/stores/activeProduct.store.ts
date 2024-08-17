import { action, makeAutoObservable } from "mobx"


export class ActiveProductStore {
  code: string = "";
  description: string = "";
  price: number = 0;
  stock: number = 0;
  sellPrice: number = 0;
  cost: number = 0;
  category: string = "";
  image?: string;
  active: boolean = true;
  
  constructor() {
    makeAutoObservable(this)
  }

  @action
  clear() {
    this.code = "";
    this.description = "";
    this.price = 0;
    this.stock = 0;
    this.sellPrice = 0;
    this.cost = 0;
    this.category = "";
  }

  getObject() {
    return {
      code: this.code,
      description: this.description,
      category: this.category,
      price: this.price,
      sellPrice: this.sellPrice,
      cost: this.cost,
      stock: this.stock,
    };
  }
}
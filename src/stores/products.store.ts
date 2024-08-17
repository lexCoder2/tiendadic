import { action, computed, makeAutoObservable } from 'mobx'
import { ProductType } from '../types/product.type'
import User from '../entities/User'
import { apiGet } from '../services/useFetch.service'
import { ProductRowType } from '../types/productRow.type'

export class ProductsStore {
  products: ProductType[] = []
  sections = []
  user: User = new User()
  loading = false

  constructor() {
    makeAutoObservable(this)
  }

  @action
  getProducts() {
    this.loading = true
    return apiGet('/products').then(
      action((products) => {
        this.products = products
        this.loading = false
      })
    )
  }

  @computed
  get productListRows(): ProductRowType[] {
    console.log(this.loading)
    return this.products.map(
      ({ id, category, code, cost, description, price, sellPrice, stock }) => ({
        id,
        code,
        description,
        category,
        cost,
        price,
        sellPrice,
        stock,
      })
    )
  }
}

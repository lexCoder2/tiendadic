import { action, computed, makeAutoObservable } from 'mobx'
import { ProductType } from '../types/product.type'
import User from '../entities/User'
import { ProductRowType } from '../types/productRow.type'
import { getAllProducts, getProductBySearch } from '../services/product.service'

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
    return getAllProducts().then(
      action((products) => {
        this.products = products
        this.loading = false
      })
    )
  }

  getProductsSearch(searchQuery: string): Promise<ProductType[]> {
    this.loading = true
    return getProductBySearch(searchQuery).then(
      action((products) => {
        console.log('productsstore '), products
        this.loading = false
        return products
      })
    )
  }

  @computed
  get productListRows(): ProductRowType[] {
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

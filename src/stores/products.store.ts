import { observable } from 'mobx'
import { ProductType } from '../types/product.type'
import User from '../entities/User'

export class ProductsStore {
  @observable product: ProductType = {name: '', image: ''}
  @observable sections = []
  @observable user: User = new User()
}
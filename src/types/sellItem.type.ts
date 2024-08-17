import { ProductType } from './product.type'

export type SellItemType = {
  quantity: number
  product: ProductType
  total: number
  discount: number
}

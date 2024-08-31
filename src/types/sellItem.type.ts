import { ProductType } from './product.type'

export type SellItemType = {
  quantity: number
  product: ProductType | null
  total: number
  discount: number
}

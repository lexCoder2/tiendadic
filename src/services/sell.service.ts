import { getProductBySearch } from './product.service'

export const setProduct = (searchQuery: string) => {
  getProductBySearch(searchQuery).then((products) => {})
}

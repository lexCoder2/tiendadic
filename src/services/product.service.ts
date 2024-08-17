import { ProductType } from '../types/product.type'
import { apiGet, apiPost } from './useFetch.service'

export function getAllProducts() {
  return apiGet('/products')
}

export function getProductById(id: number) {
  return apiGet('/products/' + id)
}

export function createProduct(addProduct: ProductType) {
  return apiPost<ProductType>('/products', addProduct)
}

import { ProductType } from '../types/product.type'
import { apiGet, apiPost } from './useFetch.service'

export function getAllProducts() {
  return apiGet('/products')
}

export function getProductById(id: number) {
  return apiGet('/products/' + id)
}

export function getProductBySearch(searchQuery: string) {
  return apiGet(`/products?search=${searchQuery}`)
}
export function createProduct(addProduct: ProductType) {
  return apiPost<ProductType>('/products', addProduct)
}

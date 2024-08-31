export interface ProductType {
  id?: number
  code: string
  description: string
  price: number
  stock: number
  sellPrice: number
  cost: number
  category: string
  image?: string
  active: boolean
  createdAt?: string
  updatedAt?: string
}

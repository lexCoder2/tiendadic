export class Product {
  id?: string
  code: string = ''
  description: string = ''
  price: number = 0
  stock: number = 0
  sellPrice: number = 0
  cost: number = 0
  category: string = ''
  image?: string
  active?: boolean = true
  createdAt?: string
  updatedAt?: string
  constructor(value: string) {
    this.description = value
  }
}

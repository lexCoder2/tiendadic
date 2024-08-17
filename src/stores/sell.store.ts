import { action, makeAutoObservable } from 'mobx'
import { SellTicketType } from '../types/sellTicket.type'
import { getAllProducts, getProductById } from '../services/product.service'

export class SellStore {
  sellClients: SellTicketType[] = []

  constructor() {
    makeAutoObservable(this)
    this.autoSell()
  }

  @action autoSell() {
    if (this.sellClients.length == 0) this.newSell()
  }

  @action newSell() {
    this.sellClients.push({
      name: 'venta 1',
      items: [],
      total: 0,
    })
  }

  @action finishSell() {}

  @action addProduct(productId: number, sellIndex = 0) {
    getProductById(productId).then(
      action((product) => {
        this.sellClients[sellIndex].items.push({
          product,
          quantity: 1,
          discount: 0,
          total: product.price * 1,
        })
        console.log(this.sellClients[sellIndex].items[0])
      })
    )
  }
}

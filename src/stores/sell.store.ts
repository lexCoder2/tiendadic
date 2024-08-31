import { action, makeAutoObservable } from 'mobx'
import { SellTicketType } from '../types/sellTicket.type'
import { getProductById } from '../services/product.service'

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

  private findIndex = (productId: number, sellIndex = 0) =>
    this.sellClients[sellIndex].items.findIndex(
      (item) => item.product?.id === productId
    )
  @action removeProduct(productId: number, sellIndex = 0) {
    const itemFoundIx = this.findIndex(productId)
    this.sellClients[sellIndex].items.splice(itemFoundIx, 1)
  }

  @action addProduct(productId: number, sellIndex = 0) {
    getProductById(productId).then(
      action((product) => {
        const itemFound = this.findIndex(productId)

        if (itemFound >= 0) {
          this.sellClients[sellIndex].items[itemFound].quantity += 1
          this.sellClients[sellIndex].items.push({
            product: null,
            quantity: 0,
            discount: 0,
            total: 0,
          })
          this.sellClients[sellIndex].items.pop()
        } else
          this.sellClients[sellIndex].items.push({
            product,
            quantity: 1,
            discount: 0,
            total: product.price * 1,
          })
      })
    )
  }
}

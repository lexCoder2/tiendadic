import SellButtons from './sellButtons.component'
import SellList from './sellList.component'

import './sell.scss'
import { useContext, useEffect } from 'react'
import { StoreContext } from '../../store.context'
import { observer } from 'mobx-react'

function SellView() {
  const { sellStore, productStore, searchStore } = useContext(StoreContext)

  useEffect(() => {
    if (searchStore.searchQuery.length > 1)
      productStore
        .getProductsSearch(searchStore.searchQuery)
        .then((products) => {
          searchStore.setSearchList(
            products.map((prod) => ({
              id: prod.id ?? 0,
              text: prod.description,
            }))
          )
        })
  }, [searchStore.searchQuery])

  useEffect(() => {
    if (searchStore.itemId != 0) sellStore.addProduct(searchStore.itemId)
    searchStore.setItemId(0)
  }, [searchStore.itemId])

  return (
    <main className="sell">
      <section className="quick-access">
        <section className="categorias">
          <h2>categorias</h2>
        </section>
        <section className="favoritos">
          <h2>favoritos</h2>
        </section>
      </section>
      <div className="sell-list">
        <SellList list={sellStore.sellClients[0]} />
        <SellButtons />
      </div>
    </main>
  )
}

const Sell = observer(SellView)

export default Sell

import SellButtons from './sellButtons.component'
import SellList from './sellList.component'

import './sell.scss'
import { useContext } from 'react'
import { StoreContext } from '../../store.context'

export function Sell() {
  const {
    sellStore: { sellClients },
  } = useContext(StoreContext)

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
        <SellList list={sellClients[0]} />
        <SellButtons />
      </div>
    </main>
  )
}

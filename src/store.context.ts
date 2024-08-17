import { createContext } from 'react'
import { ProductsStore } from './stores/products.store'
import { SectionStore } from './stores/sections.store'
import { ActiveProductStore } from './stores/activeProduct.store'
import { CategoriesStore } from './stores/categories.store'
import { SellStore } from './stores/sell.store'
import { SearchStore } from './stores/searchBar.store'

export const Store = {
  productStore: new ProductsStore(),
  sectionsStore: new SectionStore(),
  activeProductStore: new ActiveProductStore(),
  categoriesStore: new CategoriesStore(),
  sellStore: new SellStore(),
  searchStore: new SearchStore(),
}

export const StoreContext = createContext<typeof Store | Record<string, never>>(
  {}
)

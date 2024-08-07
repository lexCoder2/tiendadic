import { createContext } from 'react';
import { ProductsStore } from './stores/products.store';
import { SectionStore } from './stores/sections.store';

interface IContextStore {
  productStore: ProductsStore
  sectionsStore: SectionStore
}

const productStore = new ProductsStore()
const sectionsStore = new SectionStore()

export const StoreContext = createContext<IContextStore>({
  productStore,
  sectionsStore
})
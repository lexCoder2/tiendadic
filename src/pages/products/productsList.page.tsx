import { observer } from 'mobx-react'
import Box from '../../components/box.component'
import './products.scss'
import { Link } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { StoreContext } from '../../store.context'
import ContainerBox from '../../components/containerBox.component'
import TableProducts from './tableProducts.component'
import { DndContext } from '@dnd-kit/core'

const ProductsView = () => {
  const { productStore } = useContext(StoreContext)
  useEffect(() => {
    productStore.getProducts()
  }, [productStore])
  return (
    <DndContext>
      <Box className="box-list">
        <TableProducts rows={productStore} />
      </Box>
      <ContainerBox className="product-btn-container">
        <Link to="add">
          <button>Agregar Producto</button>
        </Link>
        <Link to="load">
          <button className="secondary">Cargar excel</button>
        </Link>
      </ContainerBox>
    </DndContext>
  )
}
const ProductList = observer(ProductsView)

export default ProductList

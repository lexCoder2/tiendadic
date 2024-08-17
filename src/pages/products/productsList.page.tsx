import { observer } from 'mobx-react'
import Box from '../../components/box.component'
import './products.scss'
import { Link } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { StoreContext } from '../../store.context'
import ContainerBox from '../../components/containerBox.component'
import { Table } from '../../components/productTable.component'

const ProductsView = () => {
  const { productStore } = useContext(StoreContext)
  useEffect(() => {
    productStore.getProducts()
  }, [productStore])
  return (
    <>
      <Box>
        <Table rows={productStore} />
      </Box>
      <ContainerBox className="product-btn-container">
        <Link to="add">
          <button>Agregar Producto</button>
        </Link>
      </ContainerBox>
    </>
  )
}
const ProductList = observer(ProductsView)

export default ProductList

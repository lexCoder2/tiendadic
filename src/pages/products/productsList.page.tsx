import { observer } from 'mobx-react'
import Box from '../../Components/box.componente'

const ProductsView = () => {
  return (<Box>
    <div>product list</div>
  </Box>)
}
const ProductList = observer(ProductsView)

export default ProductList
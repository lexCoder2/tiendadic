import { observer } from 'mobx-react'
import Box from '../../Components/box.componente'

function AddProductView() {
  return (
    <Box>
      <div>add product</div>
    </Box>
  )
}

const AddProduct = observer(AddProductView)

export default AddProduct
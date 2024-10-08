import { observer } from 'mobx-react'
import Box from '../../components/box.component'
import ContainerBox from '../../components/containerBox.component'
import { Input } from '../../components/formControls/input.component'
import { inputProp } from '../../entities/productInput'
import { useContext, useRef } from 'react'
import { StoreContext } from '../../store.context'
import { createProduct, getAllProducts } from '../../services/product.service'
import SelectInput from '../../components/formControls/select.component'

function AddProductView() {
  const { activeProductStore, productStore } = useContext(StoreContext)
  const p = activeProductStore
  const barcodeRef = useRef<HTMLInputElement>(null)
  const InputItems = [
    ['Codigo de barras', 'barcode'],
    ['Descripcion del Producto', 'description'],
    ['Categoria', 'category'],
    ['Precio de compra', 'cost'],
    ['Precio de venta', 'cost'],
    ['Inventario', 'stock'],
  ]
    .map(([label, value, id]) => ({ value, label, id }))
    .map(inputProp)

  const onSubmitHandler = () => {
    const addProduct = {
      ...p.getObject(),
      active: true,
    }
    createProduct(addProduct).then(async (_) => {
      productStore.products = await getAllProducts()
    })
  }

  const onDeleteFields = () => {
    p.clear()
    barcodeRef.current?.focus()
  }

  return (
    <>
      <form id="product-form">
        <Box>
          <h3>Nuevo producto</h3>

          <ContainerBox className="box-input">
            <Input
              ref={barcodeRef}
              value={p.code}
              onChange={(val) => (p.code = val)}
              autoFocus
              input={InputItems[0]}
            />
            <Input
              className="w6"
              value={p.description}
              onChange={(val) => (p.description = val)}
              input={InputItems[1]}
            />
            <SelectInput className="w2" />
          </ContainerBox>
          <ContainerBox className="box-input">
            <Input
              value={p.cost}
              onChange={(val) => (p.cost = val)}
              input={InputItems[3]}
            />
            <Input
              value={p.sellPrice}
              onChange={(val) => (p.sellPrice = val)}
              input={InputItems[4]}
            />
            <Input
              value={p.stock}
              onChange={(val) => (p.stock = val)}
              input={InputItems[5]}
            />
          </ContainerBox>
        </Box>
        <ContainerBox className="product-btn-container">
          <button className="btn-secondary" onClick={onDeleteFields}>
            Limpiar campos
          </button>
          <button form="product-form" onClick={onSubmitHandler}>
            Agregar
          </button>
        </ContainerBox>
      </form>
    </>
  )
}

const AddProduct = observer(AddProductView)

export default AddProduct

import { observer } from 'mobx-react'
import { productColumnFields } from '../../entities/productFieldsTable'
import { ProductsStore } from '../../stores/products.store'
import Header from './header.component'

type Props = {
  rows: ProductsStore
}

function TableProductsView({ rows }: Props) {
  return (
    <>
      <Header />
      <ul className="table-list">
        {rows.productListRows.map((row) => (
          <li className="row-list" key={row.code}>
            <div style={{ width: productColumnFields[0].width }}>
              {row.code}
            </div>
            <div style={{ width: productColumnFields[1].width }}>
              {row.description}
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

const TableProducts = observer(TableProductsView)
export default TableProducts

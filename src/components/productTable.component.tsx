import { DataGrid } from "@mui/x-data-grid"
import { productColumnFields } from "../entities/productFieldsTable"
import { observer } from "mobx-react"


const TableView = ({ rows} ) => {
  return (<div>
          <DataGrid
            rows={rows.productListRows}
            columns={productColumnFields}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            pageSizeOptions={[5, 10]}
          />
        </div>)
}
const Table =  observer(TableView)
export {Table}
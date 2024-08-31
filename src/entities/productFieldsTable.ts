import { GridColDef } from '@mui/x-data-grid'

const widthSell = 85
export const productColumnFields: GridColDef[] = [
  { field: 'code', headerName: 'Codigo', width: 130 },
  { field: 'description', headerName: 'Producto', flex: 1, width: 230 },
  { field: 'category', headerName: 'Categoria', width: 110 },
  { field: 'stock', headerName: 'Inventario', width: widthSell },
  { field: 'sellPrice', headerName: 'Precio mayoreo', width: widthSell },
  {
    field: 'cost',
    headerName: 'Precio compra',
    type: 'number',
    width: widthSell,
  },
  {
    field: 'price',
    headerName: 'Precio venta',
    width: widthSell,
  },
]

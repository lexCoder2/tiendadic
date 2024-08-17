import { GridColDef } from "@mui/x-data-grid";

export const productColumnFields: GridColDef[] = [
  { field: "code", headerName: "codigo", width: 100 },
  { field: "description", headerName: "producto", width: 230 },
  { field: "category", headerName: "categoria", width: 130 },
  { field: "sellPrice", headerName: "precio mayoreo", width: 80 },
  { field: "stock", headerName: "inventario", width: 80 },
  {
    field: "cost",
    headerName: "precio compra",
    type: "number",
    width: 90,
  },
  {
    field: "price",
    headerName: "precio",
    width: 80,
  },
];
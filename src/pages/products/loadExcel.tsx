import { observer } from 'mobx-react'
import { useState } from 'react'
import { getHeaderXls, openExcel } from '../../services/excel.service'
import { Product } from '../../entities/product.class'
import { Box } from '../../components/box.component'
import { Droppable } from './droppable'
import { Draggable } from './draggable'
import { DndContext, DragEndEvent, UniqueIdentifier } from '@dnd-kit/core'
import { DropFile } from '../../components/dropFile.component'
import { Nullable } from '../../utils'
import { DragNDropElements } from './dragNDrop'
import { Workbook } from 'exceljs'

const initValueItems = () => {
  const obj = new Product('')

  delete obj.active
  delete obj.updatedAt
  delete obj.createdAt
  delete obj.id
  delete obj.image
  return Object.keys(obj).map((name) => ({
    name,
    dragId: null,
  }))
}
export type item = {
  name: string
  dragId: Nullable<UniqueIdentifier>
}
function LoadProductsView() {
  const [data, setData] = useState<UniqueIdentifier[]>([])
  const [items, setItems] = useState<item[]>(initValueItems)
  const [document, setDoc] = useState<Workbook>()
  const handleReset = () => {
    setItems(initValueItems)
    if (document) setData(getHeaderXls(document).header)
  }
  const getFileDrop = async (e: File) => {
    const doc = await openExcel(e)
    setDoc(doc)
    const header = getHeaderXls(doc).header
    setData(header)
  }

  return (
    <Box>
      <DropFile onDrop={getFileDrop} />
      <div className="table-container">
        <DragNDropElements
          reset={handleReset}
          data={data}
          setData={setData}
          items={items}
          setItems={setItems}
        />
      </div>
    </Box>
  )
}

const LoadProducts = observer(LoadProductsView)

export default LoadProducts

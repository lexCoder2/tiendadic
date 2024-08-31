import { DndContext, DragEndEvent, UniqueIdentifier } from '@dnd-kit/core'
import { Draggable } from './draggable'
import { Droppable } from './droppable'
import { item } from './loadExcel'

type Props = {
  items: item[]
  setItems: (i: item[]) => void
  data: UniqueIdentifier[]
  setData: (i: UniqueIdentifier[]) => void
  reset: any
}
export function DragNDropElements({
  items,
  setItems,
  data,
  setData,
  reset,
}: Props) {
  const handleDragEnd = (event: DragEndEvent) => {
    const e = deleteRepeatedItems(event)
    let f = data
    if (event.over && event.over.id !== 'container') {
      f = data.filter((d) => d !== event.active.id)
      setData(f)
    } else {
      returnData(f, event.active.id)
    }
    returnData(f, e)
  }

  const deleteRepeatedItems = (event: DragEndEvent) => {
    let exist
    const c = items.map((i) => {
      if (i.dragId == event.active.id) {
        i.dragId = null
      }
      if (i.name == event.over?.id) {
        if (i.dragId) exist = i.dragId
        i.dragId = event.active.id
      }
      return i
    })
    setItems(c)
    return exist
  }

  const returnData = (f: UniqueIdentifier[], id?: UniqueIdentifier) => {
    const exist = f.find((el) => el == id)
    if (!exist && id) {
      console.log(exist, 'exist', id)
      setData([...f, id])
    }
  }
  return (
    <DndContext onDragEnd={handleDragEnd}>
      <h5>columnas del documento:</h5>
      <Droppable id="container">
        <div className="draggables">
          {data.map((rows, i) => (
            <Draggable id={rows} key={i}>
              <div>{rows}</div>
            </Draggable>
          ))}
        </div>
      </Droppable>

      <h5>columnas de la base de datos:</h5>
      <div className="list-required">
        <button className="reset-dnd" onClick={reset}>
          reset
        </button>
        {items.map(({ name, dragId }) => (
          <Droppable className="w1 header-drop" id={name} key={name}>
            {dragId && <DragItem name={dragId} />}
            <div>{name}</div>
          </Droppable>
        ))}
      </div>
    </DndContext>
  )
}

const DragItem = ({ name }: { name: UniqueIdentifier }) => (
  <Draggable id={name}>
    <div>{name}</div>
  </Draggable>
)

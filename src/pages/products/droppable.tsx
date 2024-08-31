import { useDroppable } from '@dnd-kit/core'

export function Droppable({ children, id, className }: any) {
  const { isOver, setNodeRef } = useDroppable({
    id,
  })
  const style = {
    borderColor: isOver ? 'blue' : '#ddd',
    color: isOver ? 'green' : undefined,
  }

  return (
    <div className={className} ref={setNodeRef} style={style}>
      {children}
    </div>
  )
}

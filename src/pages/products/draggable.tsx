import { UniqueIdentifier, useDraggable } from '@dnd-kit/core'
import { CSSProperties, PropsWithChildren } from 'react'

type Props = { id: UniqueIdentifier }
export function Draggable({ children, id }: PropsWithChildren<Props>) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  })

  const style: CSSProperties = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    backgroundColor: transform ? '#fdd' : undefined,
    zIndex: transform ? 11 : 1,
    boxShadow: !transform
      ? '0 0 3px rgba(175, 148, 148, 0.1)'
      : '0 0 20px rgba(175, 148, 168, 0.3)',
    // position:
    //   transform && (transform.x > 50 || transform.y > 50)
    //     ? 'absolute'
    //     : 'inherit',
  }

  return (
    <button
      className="btn-secondary dragable-item"
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      {children}
    </button>
  )
}

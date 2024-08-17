import { observer } from 'mobx-react'
import { PropsWithChildren } from 'react'

export default function BoxView({
  children,
  className = '',
}: PropsWithChildren<{ className?: string }>) {
  return <div className={`${className} box-shadow`}>{children}</div>
}

const Box = observer(BoxView)
export { Box }

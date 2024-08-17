
import { PropsWithChildren } from "react";


export default function ContainerBox({children, className=''}: PropsWithChildren<{className?: string}>) {
  return (
    <div className={`box-shadow transparent ${className}`}>
      {children}
    </div>
  )
}
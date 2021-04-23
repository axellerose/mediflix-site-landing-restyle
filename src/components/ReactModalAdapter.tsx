import React, { ComponentProps } from "react"
import ReactModal from "react-modal"

type ReactModalAdapterProps = Omit<
  ComponentProps<typeof ReactModal>,
  "className"
> & {
  className?: string
}

function ReactModalAdapter({ className, ...props }: ReactModalAdapterProps) {
  const contentClassName = `${className}__content`
  const overlayClassName = `${className}__overlay`
  return (
    <ReactModal
      portalClassName={className}
      className={contentClassName}
      overlayClassName={overlayClassName}
      {...props}
    />
  )
}

export default ReactModalAdapter

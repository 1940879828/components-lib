import { X } from "lucide-react"
import { type ReactNode, useRef } from "react"
import { cn } from "../../lib/utils.ts"

interface DialogProps {
  title?: ReactNode
  content?: ReactNode
  actions?: ReactNode
  className?: string
}

const Dialog = ({ title, content, actions, className }: DialogProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null)

  const show = () => {
    dialogRef.current?.showModal()
  }

  const hide = () => {
    dialogRef.current?.close()
  }

  const onMaskClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) {
      hide()
    }
  }

  return (
    <>
      <button className="btn" onClick={show}>
        open modal
      </button>
      <dialog ref={dialogRef} className="modal" onClick={onMaskClick}>
        <div className={cn("modal-box", className)}>
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              <X size={16} />
            </button>
          </form>
          {title && title}
          {content && content}
          <div className="modal-action">{actions && actions}</div>
        </div>
      </dialog>
    </>
  )
}

export default Dialog

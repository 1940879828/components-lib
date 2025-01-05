import { type VariantProps, cva } from "class-variance-authority"
import type React from "react"
import {
  type ReactNode,
  type RefObject,
  createContext,
  useContext,
  useRef
} from "react"
import { cn } from "../../lib/utils.ts"
import ClickAwayListener from "../ClickAwayListener"

const DropdownContext = createContext<RefObject<HTMLDetailsElement> | null>(
  null
)

interface DropdownTriggerProps {
  children: ReactNode
  className?: string
}

export const DropdownTrigger: React.FC<DropdownTriggerProps> = (props) => {
  const { children, className } = props
  const detailsRef = useContext(DropdownContext)

  if (!detailsRef) {
    throw new Error("DropdownTrigger must be used within a Popover")
  }

  const onBoxClick = () => {
    detailsRef.current?.toggleAttribute("open")
  }

  return (
    <summary
      className={cn("appearance-none list-none", className)}
      onClick={onBoxClick}
    >
      {children}
    </summary>
  )
}

export const DropdownContent: React.FC<{
  children: ReactNode
  className?: string
}> = ({ children, className }) => {
  const detailsRef = useContext(DropdownContext)

  if (!detailsRef) {
    throw new Error("DropdownContent must be used within a Popover")
  }

  return (
    <ul
      className={cn(
        "menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow",
        className
      )}
    >
      {children}
    </ul>
  )
}

interface dropdownProps
  extends React.ButtonHTMLAttributes<HTMLDetailsElement>,
    VariantProps<typeof dropdownVariants> {
  children: React.ReactNode
  trigger?: "click" | "hover"
}

const dropdownVariants = cva("dropdown", {
  variants: {
    variant: {
      bottom: "dropdown-bottom",
      bottomEnd: "dropdown-bottom dropdown-end",
      top: "dropdown-top",
      topEnd: "dropdown-top dropdown-end",
      left: "dropdown-left",
      leftEnd: "dropdown-left dropdown-end",
      right: "dropdown-right",
      rightEnd: "dropdown-right dropdown-end"
    }
  },
  defaultVariants: {
    variant: "bottom"
  }
})

const DropDown = (props: dropdownProps) => {
  const { children, variant, className, trigger, ...otherProps } = props
  const detailsRef = useRef<HTMLDetailsElement>(null)

  const onAwayClick = () => {
    detailsRef?.current?.removeAttribute("open")
  }

  const onMouseEnter = () => {
    if (trigger !== "hover") return
    detailsRef.current?.setAttribute("open", "")
  }

  const onMouseLeave = () => {
    if (trigger !== "hover") return
    detailsRef.current?.removeAttribute("open")
  }

  return (
    <ClickAwayListener onClickAway={onAwayClick}>
      <details
        ref={detailsRef}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={cn(dropdownVariants({ variant, className }))}
        {...otherProps}
      >
        <DropdownContext.Provider value={detailsRef}>
          {children}
        </DropdownContext.Provider>
      </details>
    </ClickAwayListener>
  )
}

export default DropDown

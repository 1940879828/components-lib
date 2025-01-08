import type React from "react"
import type { PropsWithChildren, ReactNode } from "react"
import { cn } from "../../lib/utils.ts"

interface SwapOnProps extends PropsWithChildren {
  className?: string
}

export const SwapOn = ({ className, children }: SwapOnProps) => {
  return <div className={cn("swap-on", className)}>{children}</div>
}

interface SwapOffProps extends PropsWithChildren {
  className?: string
}

export const SwapOff = ({ className, children }: SwapOffProps) => {
  return <div className={cn("swap-off", className)}>{children}</div>
}

interface RotateSwapProps {
  onChange?: (value: boolean) => void
  variant?: "rotate" | "flip"
  children?: ReactNode
  defaultValue?: boolean
}

export const RotateSwap = ({
  variant = "rotate",
  defaultValue = false,
  children,
  onChange
}: RotateSwapProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.checked)
  }

  return (
    <label className={`swap swap-${variant}`}>
      <input
        type="checkbox"
        defaultChecked={defaultValue}
        onChange={handleChange}
      />
      {children}
    </label>
  )
}

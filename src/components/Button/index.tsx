import React, {ReactNode} from "react";
import { cva, type VariantProps } from "class-variance-authority"
import {cn} from "../../lib/utils.ts";

interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children?: ReactNode
}

const buttonVariants = cva(
  "btn",
  {
    variants: {
      variant: {
        neutral:"btn-neutral",
        primary:"btn-primary",
        secondary:"btn-secondary",
        accent:"btn-accent",
        ghost:"btn-ghost",
        info:"btn-info",
        success:"btn-success",
        warning:"btn-warning",
        error:"btn-error",
      },
      size: {
        xs:"btn-xs",
        sm:"btn-sm",
        md:"btn-md",
        lg:"btn-lg"
      },
      shape: {
        default: "",
        square: "btn-square",
        circle: "btn-circle"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      shape: "default"
    },
  }
)

const Button: React.FC<Props> = React.forwardRef<HTMLButtonElement, Props>(({ children, className, variant, size, shape, ...props }, ref) => {
  return (
    <button className={cn(buttonVariants({ variant, size, shape, className }))} ref={ref} {...props}>
      {children}
    </button>
  );
});

Button.displayName = "Button"
export default Button;
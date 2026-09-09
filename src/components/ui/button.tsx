import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--primary)] text-white shadow hover:bg-[var(--primary-dark)] active:scale-95 transition-transform",
        secondary:
          "bg-[var(--gray-100)] text-[var(--gray-900)] hover:bg-[var(--gray-200)] active:scale-95 transition-transform",
        outline:
          "border-2 border-[var(--primary)] text-[var(--primary)] bg-transparent hover:bg-[var(--primary)]/5 hover:border-[var(--primary-dark)] hover:text-[var(--primary-dark)]",
        ghost: "hover:bg-[var(--gray-100)] hover:text-[var(--gray-900)]",
        link: "text-[var(--primary)] underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-4 rounded-md",
        default: "h-11 px-6",
        lg: "h-12 px-8 text-base rounded-xl",
        xl: "h-14 px-10 text-lg rounded-xl",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

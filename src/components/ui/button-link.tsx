import * as React from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface ButtonLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "default" | "lg" | "xl" | "icon";
  children: React.ReactNode;
  className?: string;
}

/**
 * Renders a Next.js Link that looks like a Button. Use for CTAs that navigate
 * so users get proper link behavior (open in new tab, right-click, SEO).
 */
const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ href, variant = "primary", size = "default", className, children, ...props }, ref) => {
    return (
      <Link
        ref={ref}
        href={href}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      >
        {children}
      </Link>
    );
  }
);
ButtonLink.displayName = "ButtonLink";

export { ButtonLink };

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:translate-y-[1px]",
  {
    variants: {
      variant: {
        // Brand: modern gradient that works in light/dark
        default:
          "bg-gradient-to-b from-violet-600 to-fuchsia-600 text-white shadow-sm hover:shadow-md hover:brightness-105 dark:from-violet-500 dark:to-fuchsia-500",
        // Subtle solid surface that adapts to theme
        soft:
          "bg-white text-foreground hover:bg-white/90 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800 border border-black/10 dark:border-white/10 shadow-sm",
        // Outline with gentle hover fill
        outline:
          "border border-black/10 bg-transparent text-foreground hover:bg-violet-50 dark:border-white/10 dark:hover:bg-violet-400/10",
        // Secondary muted surface
        secondary:
          "bg-muted text-foreground shadow-sm hover:bg-muted/80",
        // Minimal hover
        ghost:
          "hover:bg-violet-50 dark:hover:bg-violet-400/10",
        link: "text-violet-600 dark:text-violet-400 underline-offset-4 hover:underline",
        destructive:
          "bg-destructive text-white shadow-sm hover:bg-destructive/90 focus-visible:ring-destructive/30",
      },
      size: {
        default: "h-10 px-4 py-2 has-[>svg]:px-3",
        sm: "h-9 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-11 rounded-lg px-6 has-[>svg]:px-4",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }

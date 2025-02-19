import { ButtonHTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

const buttonVariants = cva(
  'w-full rounded-md px-4 py-2 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        default: 'bg-teal-500 text-white hover:bg-teal-600 disabled:bg-teal-700',
        outline: 'border border-teal-500 text-teal-500 hover:bg-teal-50',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean
}

export function Button({
  className,
  variant,
  isLoading,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({ variant, className })}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  )
}
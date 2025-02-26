import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
}

export function Button({
  className,
  isLoading,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className="w-full tracking-[0.3px] hover:bg-[#e0492e] text-[1rem] text-gray-600 hover:text-white transition-colors duration-200 rounded-md px-4 py-2 focus:outline-none disabled:opacity-50 bg-[#d8d8d5]"
      disabled={isLoading}
      {...props}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  )
}
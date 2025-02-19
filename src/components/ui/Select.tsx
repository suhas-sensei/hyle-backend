import { SelectHTMLAttributes } from 'react'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  hint?: string
  error?: string
}

export function Select({
  label,
  hint,
  error,
  children,
  className,
  ...props
}: SelectProps) {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-zinc-200">{label}</label>
      <select
        className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-4 py-2 text-zinc-100 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
        {...props}
      >
        {children}
      </select>
      {hint && <p className="text-sm text-zinc-500">{hint}</p>}
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  )
}
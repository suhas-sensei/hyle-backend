import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  suffix?: string
  error?: string
}

export function Input({ label, suffix, error, className, ...props }: InputProps) {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-zinc-200">{label}</label>
      <div className="relative">
        <input
          className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-4 py-2 text-zinc-100 placeholder:text-zinc-500 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
          {...props}
        />
        {suffix && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500">
            {suffix}
          </span>
        )}
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  )
}

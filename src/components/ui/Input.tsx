import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  suffix?: string
  error?: string
}

export function Input({ label, suffix, error, className, ...props }: InputProps) {
  return (
    <div className="space-y-1">
      <div className="text-[1.01rem] font-medium tracking-[0.4px] text-gray-600">
        {label}
      </div>
      <div className="relative">
        <input
          className="w-full pr-24 border-[rgba(255,255,255,0.3)] focus:border-[rgba(255,255,255,0.5)] placeholder-gray-600 focus:text-gray-700 transition-colors duration-200 rounded-md bg-[#d8d8d5] px-3 py-2 text-gray-600"
          {...props}
        />
        {suffix && (
          <span className="absolute tracking-[0.3px] right-3 top-1/2 -translate-y-1/2 text-sm opacity-50 text-gray-600">
            {suffix}
          </span>
        )}
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  )
}
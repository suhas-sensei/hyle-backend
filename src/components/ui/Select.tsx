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
      <div className="text-center text-[1rem] tracking-wide text-gray-600">
        {label}
      </div>
      <div className="relative">
        <select
          className="w-full rounded-md border-0 bg-[#d8d8d5]/80 hover:bg-[#5c7480] hover:bg-opacity-10 backdrop-blur-sm font-medium text-gray-600 hover:text-white px-3 py-1.5 text-[16px] tracking-[0.5px] shadow-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-[none] disabled:cursor-not-allowed disabled:opacity-50 appearance-none pl-4 pr-10"
          {...props}
        >
          {children}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <svg className="h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      {hint && <p className="text-center text-sm tracking-[0.7px] opacity-50 text-gray-600">{hint}</p>}
      {error && <p className="text-sm text-red-500">{error}</p>}
      
      {/* Custom styling for the dropdown - this gets applied via CSS */}
      <style jsx global>{`
        select {
          -webkit-appearance: none;
          -moz-appearance: none;
          background-color: rgba(216, 216, 213, 0.9);
        }
        
        select option {
          background-color: rgba(216, 216, 213, 0.9);
          color: #4a4a4a;
          padding: 8px;
          border-radius: 0;
        }
        
        select option:checked {
          background-color: #e0492e;
          color: white;
          position: relative;
        }
        
        /* Create checkmark for selected option */
        select option:checked::after {
          content: "✓";
          position: absolute;
          right: 10px;
          color: white;
        }
        
        /* First and last items get rounded corners */
        select option:first-child {
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
        }
        
        select option:last-child {
          border-bottom-left-radius: 4px;
          border-bottom-right-radius: 4px;
        }
      `}</style>
    </div>
  )
}
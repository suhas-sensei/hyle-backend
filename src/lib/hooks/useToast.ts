import { toast as sonnerToast } from 'sonner'

interface ToastOptions {
  title: string
  description: string
  variant?: 'default' | 'destructive'
}

export function useToast() {
  const toast = ({ title, description, variant = 'default' }: ToastOptions) => {
    sonnerToast[variant === 'destructive' ? 'error' : 'success'](title, {
      description,
    })
  }

  return { toast }
}
import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { faucet } from '@/lib/api/faucet'

interface UseFaucetOptions
  extends Omit<
    UseMutationOptions<unknown, Error, { username: string; token: string }>,
    'mutationFn'
  > {}

export function useFaucet(options?: UseFaucetOptions) {
  return useMutation({
    mutationFn: faucet,
    ...options,
  })
}

import { useMutation, UseMutationOptions } from '@tanstack/react-query'

interface FaucetParams {
  username: string;
  token: string;
}

export function useFaucet(options: UseMutationOptions<unknown, Error, FaucetParams, unknown>) {
  return useMutation({
    mutationFn: async ({ username, token }: FaucetParams) => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/faucet`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          username: username + ".hydentity",  // Note the .hydentity suffix here
          token 
        }),
      });
      
      if (!response.ok) {
        const text = await response.text();
        throw new Error(text || 'Failed to process faucet request');
      }
      
      return response.json();
    },
    ...options,
  });
}
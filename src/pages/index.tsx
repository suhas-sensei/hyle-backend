import { Faucet } from '@/components/Faucet'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-zinc-900">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-teal-500 mb-2">Hylé Faucet</h1>
            <p className="text-zinc-400">Request test tokens for the Hylé network</p>
          </div>
          <Faucet />
        </div>
      </main>
    </QueryClientProvider>
  )
}
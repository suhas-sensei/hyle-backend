import { Faucet } from '@/components/Faucet'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Anton } from "next/font/google";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

const queryClient = new QueryClient()

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex items-center justify-center bg-[url('/images/satelliteBG.jpg')] p-8 animate-[floatSlow_120s_linear_infinite] sm:animate-[floatSlow_150s_linear_infinite] md:animate-[floatSlow_180s_linear_infinite] lg:animate-[floatSlow_210s_linear_infinite]">
        <div className={`w-full max-w-md p-8 space-y-6 aero-window rounded-[1rem] rounded-tr-[0.7rem] ${anton.className}`}>
          
          <Faucet />
        </div>
      </div>
    </QueryClientProvider>
  )
}
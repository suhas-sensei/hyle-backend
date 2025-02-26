import { Toaster } from 'sonner';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppProps } from 'next/dist/shared/lib/router/router';
import { Anton } from "next/font/google";
import '../styles/globals.css';

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  style: "normal",
});

const geistSans = {
  variable: "font-geist-sans",
};

const geistMono = {
  variable: "font-geist-mono",
};

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <main className={`${anton.className} ${geistSans.variable} ${geistMono.variable}`}>
        <Component {...pageProps} />
        <Toaster />
      </main>
    </QueryClientProvider>
  );
}
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { Toaster as ShadcnToaster } from "@/components/ui/toaster";
import { ThemeProvider } from 'next-themes';
import { Geist_Mono, Geist  } from "next/font/google"; // Corrected import

const geistSans = Geist ({ // Corrected usage
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({ // Corrected usage
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <div className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
            <Component {...pageProps} />
          </div>
          <ShadcnToaster />
          <SonnerToaster />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
import "@/styles/globals.css";
import "@/styles/fonts.css";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

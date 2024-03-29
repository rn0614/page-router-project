import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import { QueryClientProvider } from "react-query";
import { queryClient as QueryClient } from "@/react-query/queryClient";
import { ReactQueryDevtools } from "react-query/devtools";
import Loading from "@/components/atoms/loading/Loading";

const queryClient = QueryClient;
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />

        <div id="portal">
          <Loading />
        </div>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

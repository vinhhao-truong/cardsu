import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "../layouts/Layout";
import { Provider as ReduxProvider } from "react-redux";
import store from "../redux/store";
import { SessionProvider } from "next-auth/react";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />;

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={pageProps.session}>
        <ReduxProvider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ReduxProvider>
      </SessionProvider>
    </QueryClientProvider>
  );
}

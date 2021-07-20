import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { StrictMode } from "react";
import theme from "../src/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StrictMode>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </StrictMode>
  );
}

export default MyApp;

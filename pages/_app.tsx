import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import "../styles/globals.css";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "polygon";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      clientId="01a7bed7ae1d9086c76ee9961c92b190"
      activeChain={activeChain}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;

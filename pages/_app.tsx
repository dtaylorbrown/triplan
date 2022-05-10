import { SessionProvider } from "next-auth/react";
import { ChakraProvider, extendTheme, CSSReset } from "@chakra-ui/react"
import { AppProps } from "next/app";

const colors = {
  brand: {
    900: "#f4cc70",
    800: "#de7a22",
    700: "#20948b",
    600: "#6ab187"
  }
}

const theme = extendTheme({ colors });

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider session={pageProps.session}>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  );
};

export default App;

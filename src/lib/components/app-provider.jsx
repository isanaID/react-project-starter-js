import { BrowserRouter as Router } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ChakraProvider, extendTheme, ColorModeScript } from "@chakra-ui/react";

import customTheme from "../theme";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      useErrorBoundary: false,
      refetchOnWindowFocus: false,
      retry(failureCount, error) {
        if (error.status === 404) return false;
        if (failureCount < 2) return true;
        return false;
      },
    },
  },
});

const theme = extendTheme(customTheme);

function AppProviders({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider resetCSS theme={theme}>
        <Router>{children}</Router>
      </ChakraProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export { AppProviders };

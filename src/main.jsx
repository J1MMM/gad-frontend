import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthProvider.jsx";
import { DataProvider } from "./context/DataProvider.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "@mui/material";
import theme from "./styles/theme.jsx";

const queryClient = new QueryClient({});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <DataProvider>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </DataProvider>
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
);

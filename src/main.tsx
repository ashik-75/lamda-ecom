import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import App from "./App";
import { CartProvider } from "./hooks/useCart";
import "./index.css";
import AuthProvider from "./provider/AuthProvider";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={client}>
        <CartProvider>
          <App />
          <Toaster />
        </CartProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);

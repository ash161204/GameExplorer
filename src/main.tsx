import { Provider } from "@/components/ui/provider";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <Provider>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools></ReactQueryDevtools>
    </QueryClientProvider>
  </Provider>,
);

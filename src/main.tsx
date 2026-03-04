import { Provider } from "@/components/ui/provider";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router-dom";
import router from "./routes.tsx";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <Provider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
      <ReactQueryDevtools></ReactQueryDevtools>
    </QueryClientProvider>
  </Provider>,
);

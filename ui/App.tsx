import { Suspense } from "react";
import { Loading } from "/ui/common/components/loading";
import { QueryClient, QueryClientProvider, QueryErrorResetBoundary } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ErrorBoundary } from "react-error-boundary";
import { Box, Button, Title } from "@mantine/core";
import { UIProvider } from "/ui/styles/ui-provider";
import { Routes } from "/ui/routes";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <UIProvider>
          <ErrorBoundary
            onReset={reset}
            fallbackRender={({ resetErrorBoundary }) => (
              <Box>
                <Title order={1}>There was an error!</Title>
                <Button onClick={() => resetErrorBoundary()}>Try again</Button>
              </Box>
            )}
          >
            <Suspense fallback={<Loading />}>
              <QueryClientProvider client={queryClient}>
                <Routes />
                <ReactQueryDevtools initialIsOpen={false} />
              </QueryClientProvider>
            </Suspense>
          </ErrorBoundary>
        </UIProvider>
      )}
    </QueryErrorResetBoundary>
  );
}

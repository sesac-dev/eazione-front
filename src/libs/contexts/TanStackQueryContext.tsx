import { PropsWithChildren, useState } from 'react';
import { QueryClient, QueryClientConfig, QueryClientProvider } from '@tanstack/react-query';

const queryClientOption: QueryClientConfig = {
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      staleTime: 60 * 1000,
    },
  },
};

export default function TanStackQueryContext({ children }: PropsWithChildren) {
  const [queryClient] = useState(() => new QueryClient(queryClientOption));

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}

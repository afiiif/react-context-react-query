import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import FooProvider from './context-foo';
import BarProvider from './context-bar';

const queryClient = new QueryClient();

export default function Core({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <FooProvider>
        <BarProvider>

          {children}
          <ReactQueryDevtools />

        </BarProvider>
      </FooProvider>
    </QueryClientProvider>
  );
}

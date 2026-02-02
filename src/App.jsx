import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

import GlobalStyles from './styles/GlobalStyles';
import AppLayout from './UI/AppLayout';
import { Bookings, Cabins, Dashboard, Settings } from './pages';
import { BookingDetails } from './features/bookings';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="cabins" element={<Cabins />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="bookings/:bookingId" element={<BookingDetails />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={8}
        containerStyle={{
          zIndex: 'var(--z-index-toast)',
        }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: '1.6rem',
            maxWidth: '50rem',
            padding: '1.6rem 2.4rem',
            backgroundColor: 'var(--color-grey-0)',
            color: 'var(--color-grey-700)',
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;

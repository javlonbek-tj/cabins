import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import GlobalStyles from './styles/GlobalStyles';
import AppLayout from './UI/AppLayout';
import Cabins from './pages/Cabins';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="cabins" element={<Cabins />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

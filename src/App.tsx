import '@/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Admin from './components/admin';
import Dashboard from './components/dashboard';
import Home from './components/home';
import Login from './components/login';
import NotFound from './components/not-found';
// Higher Order Components
import AdminRoute from './components/route-components/admin-route';
import PrivateRoute from './components/route-components/private-route';
import PublicRoute from './components/route-components/public-route';
import { useAuthInitializer } from './hooks/useAuthInitializer';

function App() {
  const isLoading = useAuthInitializer();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <PublicRoute>
              <Home />
            </PublicRoute>
          }
        />

        {/* Admin Route - Accessible only by admin users */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <Admin />
            </AdminRoute>
          }
        />

        {/* Dashboard Route - For authenticated users */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        {/* Login Route - For login page */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

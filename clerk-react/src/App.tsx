import { BrowserRouter, Routes, Route } from 'react-router';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import SignIn from './pages/SignIn';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

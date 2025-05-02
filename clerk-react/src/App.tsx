import { BrowserRouter, Routes, Route } from 'react-router';
import Landing from './pages/Landing';
import SignInPage from './pages/SignInPage';
import UserProfilePage from './pages/UserProfile';
import './App.css';
import CreateOrganizationPage from './pages/CreateOrganization';
import OrganizationProfilePage from './pages/OrganizationProfilePage';
import OrganizationListPage from './pages/OrganizationListPage';
import SignUpPage from './pages/SignUpPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/profile" element={<UserProfilePage />} />
        <Route
          path="/create-organization"
          element={<CreateOrganizationPage />}
        />
        <Route
          path="/organization-profile"
          element={<OrganizationProfilePage />}
        />
        <Route path="/organization-list" element={<OrganizationListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

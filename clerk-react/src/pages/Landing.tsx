import { Link } from 'react-router';
import './Landing.css';
import {
  OrganizationSwitcher,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from '@clerk/clerk-react';

export default function Home() {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <div className="brand">
          <img src="https://avatar.vercel.sh/brion" />
        </div>
        <div className="auth-buttons">
          <SignedOut>
            <Link to="/sign-up">Sign Up</Link>
          </SignedOut>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <OrganizationSwitcher />
          </SignedIn>
          <SignedIn>
            <Link to="/profile">Profile</Link>
          </SignedIn>
          <SignedIn>
            <Link to="/organization-profile">Organization Profile</Link>
          </SignedIn>
          <SignedIn>
            <Link to="/create-organization">Create Organization</Link>
          </SignedIn>
          <SignedIn>
            <Link to="/organization-list">Organization List</Link>
          </SignedIn>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </header>
      <main className="hero">
        <h1>Discover the Future with My App</h1>
        <p>
          Join us to unlock exclusive features and insights. Sign in to begin
          your adventure.
        </p>
      </main>
      <footer className="landing-footer">
        <p>&copy; 2025 My Brand. All rights reserved.</p>
      </footer>
    </div>
  );
}

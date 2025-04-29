import './Landing.css';
import {
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
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </header>
      <main className="hero">
        <h1>Welcome to My App</h1>
        <p>Your journey starts here. Sign in to explore more.</p>
      </main>
      <footer className="landing-footer">
        <p>&copy; 2025 My Brand. All rights reserved.</p>
      </footer>
    </div>
  );
}

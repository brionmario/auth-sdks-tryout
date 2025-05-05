import { Link } from 'react-router';
import './HomePage.css';
import {
  OrganizationSwitcher,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  Protect,
  useOrganization,
  useUser,
} from '@clerk/clerk-react';

export default function HomePage() {
  const { organization } = useOrganization();
  const { user } = useUser();

  return (
    <div className="landing-page">
      <header className="landing-header">
        <div className="brand">
          <img src="https://avatar.vercel.sh/brion" alt="Brand Logo" />
          <span className="brand-name">TeamSync</span>
        </div>
        <div className="auth-buttons">
          <SignedOut>
            <Link to="/sign-up" className="sign-up-btn">
              Sign Up
            </Link>
            <SignInButton mode="modal" />
          </SignedOut>
          <SignedIn>
            <OrganizationSwitcher
              appearance={{
                elements: {
                  rootBox: {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '200px',
                  },
                },
              }}
            />
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </header>

      <main>
        <SignedOut>
          <section className="hero">
            <h1>TeamSync - Organization Management Made Simple</h1>
            <p>
              Streamline your team collaboration with powerful organization
              management tools.
            </p>
            <div className="hero-features">
              <div className="feature-card">
                <h3>Team Management</h3>
                <p>Create and manage multiple teams with ease</p>
              </div>
              <div className="feature-card">
                <h3>Role-Based Access</h3>
                <p>Define custom roles and permissions</p>
              </div>
              <div className="feature-card">
                <h3>Analytics</h3>
                <p>Track team activity and performance</p>
              </div>
            </div>
          </section>
        </SignedOut>

        <SignedIn>
          <Protect>
            <section className="dashboard">
              <div className="welcome-section">
                <h2>
                  Welcome,{' '}
                  {user?.firstName || user?.emailAddresses[0].emailAddress}!
                </h2>
                {organization ? (
                  <p>Current Organization: {organization.name}</p>
                ) : (
                  <p>No organization selected</p>
                )}
              </div>

              <div className="quick-actions">
                <h3>Quick Actions</h3>
                <div className="action-grid">
                  {!organization && (
                    <Link to="/create-organization" className="action-card">
                      <h4>Create Organization</h4>
                      <p>Start a new team workspace</p>
                    </Link>
                  )}
                  {organization && (
                    <>
                      <Link
                        to={`/organization-profile`}
                        className="action-card"
                      >
                        <h4>Organization Settings</h4>
                        <p>Manage your organization preferences</p>
                      </Link>
                      <Link to="/organization-list" className="action-card">
                        <h4>Switch Organization</h4>
                        <p>View and switch between organizations</p>
                      </Link>
                      <div className="action-card">
                        <h4>Members</h4>
                        <p>Total members: {organization.membersCount || 0}</p>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {organization && (
                <div className="activity-section">
                  <h3>Recent Activity</h3>
                  <div className="activity-list">
                    <div className="activity-item">
                      <span className="activity-icon">👥</span>
                      <div className="activity-content">
                        <p>New member joined the organization</p>
                        <small>2 hours ago</small>
                      </div>
                    </div>
                    <div className="activity-item">
                      <span className="activity-icon">⚙️</span>
                      <div className="activity-content">
                        <p>Organization settings updated</p>
                        <small>1 day ago</small>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>
          </Protect>
        </SignedIn>
      </main>

      <footer className="landing-footer">
        <p>&copy; 2025 TeamSync. All rights reserved.</p>
      </footer>
    </div>
  );
}

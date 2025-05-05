import { CreateOrganization } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

export default function CreateOrganizationPage() {
  const navigate = useNavigate();

  return (
    <div className="page centered">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center">
            <button
              onClick={() => navigate('/')}
              className="mr-4 text-gray-600 hover:text-gray-900"
            >
              ← Back
            </button>
            <h1 className="text-2xl font-bold text-gray-900">
              Create New Team
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <CreateOrganization />
          </div>
        </div>
      </main>
    </div>
  );
}
